import type { Context } from "hono";
import { prisma } from "../../lib/prisma";

export const getAllCategories = async (c: Context) => {
  const categories = await prisma.category.findMany();
  return c.json(categories);
};
