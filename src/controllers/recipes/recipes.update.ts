import type { Context } from "hono";
import { prisma } from "lib/prisma";
import { updateRecipeSchema } from "schemas/recipe.schema";
import { recipeIdParamSchema } from "schemas/recipe.schema";

export const updateRecipe = async (c: Context): Promise<Response> => {
  const params = recipeIdParamSchema.parse(c.req.param());

  const existing = await prisma.recipe.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    return c.json({ error: "recipes not found" }, 404);
  }
  const body = await c.req.json();

  const validatedData = updateRecipeSchema.parse(body);

  const { ingredients, steps, ...recipeFields } = validatedData;

  const updatedRecipe = await prisma.recipe.update({
    where: { id: params.id },
    data: recipeFields,
  });

  return c.json(updatedRecipe, 200);
};
