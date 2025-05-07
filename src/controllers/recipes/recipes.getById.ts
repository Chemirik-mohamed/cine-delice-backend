import type { Context } from "hono";
import { prisma } from "lib/prisma";
import type { RecipeResponse } from "schemas/recipe.schema";
import { recipeIdParamSchema } from "schemas/recipe.schema";

export const getRecipesById = async (c: Context): Promise<Response> => {
  const params = recipeIdParamSchema.parse(c.req.param());

  const recipes: RecipeResponse | null = await prisma.recipe.findUnique({
    where: { id: params.id },
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
  if (!recipes) {
    return c.json({ error: "recipes not found" }, 404);
  }
  return c.json(recipes);
};
