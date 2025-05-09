import type { Context } from "hono";
import { prisma } from "../../lib/prisma";
import {
  CreateCategorySchema,
  type CreateCategorySchemaInput,
} from "../../schemas/category.schema";
export const createCategory = async (c: Context) => {
  const dataCategory = await c.req.json();
  const validatedData: CreateCategorySchemaInput =
    CreateCategorySchema.parse(dataCategory);
  const { name } = validatedData;
  const category = await prisma.category.create({
    data: { name },
  });
  return c.json(category);
};
