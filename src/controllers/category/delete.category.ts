import type { Context } from "hono";
import { prisma } from "../../lib/prisma";
import {
  DeleteCategorySchema,
  type DeleteCategorySchemaInput,
} from "../../schemas/category.schema";

export const deleteCategory = async (c: Context) => {
  const dataCategory = await c.req.json();
  const validatedData: DeleteCategorySchemaInput =
    DeleteCategorySchema.parse(dataCategory);
  const { id } = validatedData;
  const category = await prisma.category.delete({
    where: { id },
  });
  return c.json(category);
};
