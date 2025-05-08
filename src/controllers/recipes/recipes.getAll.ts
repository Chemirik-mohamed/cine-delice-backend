import type { Context } from "hono";
import { prisma } from "lib/prisma";
import type { RecipeResponse } from "schemas/recipe.schema";
import { recipeListResponseSchema } from "schemas/recipe.schema";

export const getAllRecipes = async (c: Context): Promise<Response> => {
  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      createdByName: true,
      createdByAvatar: true,
      imageUrl: true,
      userId: true,
      showId: true,
      categoryId: true,
      steps: {
        select: {
          id: true,
          order: true,
          content: true,
        },
      },
      ingredients: {
        include: {
          ingredient: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  const result = recipeListResponseSchema.safeParse(recipes);

  if (!result.success) {
    return c.json(
      { error: "Erreur de validation", details: result.error.format() },
      500,
    );
  }

  return c.json(result.data);
};
