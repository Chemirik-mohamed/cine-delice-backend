import type { Context } from "hono";
import { prisma } from "../../lib/prisma";
import {
  paramIdSchema,
  type paramIdSchemaInput,
} from "../../schemas/category.schema";

export const getCategoryById = async (c: Context) => {
  const dataId = c.req.param("id");
  const validatedDataId: paramIdSchemaInput = paramIdSchema.parse({
    id: dataId,
  });
  const category = await prisma.category.findUnique({
    where: { id: validatedDataId.id },
  });
  if (!category) {
    return c.json({ error: "Category not found" }, 404);
  }
  return c.json(category);
};
