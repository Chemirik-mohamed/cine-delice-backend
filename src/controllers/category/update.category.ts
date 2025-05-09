import type { Context } from "hono";
import { prisma } from "../../lib/prisma";
import {
  UpdateCategorySchema,
  type UpdateCategorySchemaInput,
  paramIdSchema,
  type paramIdSchemaInput,
} from "../../schemas/category.schema";

export const updateCategory = async (c: Context) => {
  const dataId = c.req.param("id");
  const validatedDataId: paramIdSchemaInput = paramIdSchema.parse(dataId);
  const dataCategory = await c.req.json();
  const validatedData: UpdateCategorySchemaInput =
    UpdateCategorySchema.parse(dataCategory);
  const { name } = validatedData;
  const category = await prisma.category.update({
    where: { id: validatedDataId.id },
    data: { name },
  });
  return c.json(category);
};
