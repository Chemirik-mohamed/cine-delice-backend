import type { Context } from "hono";
import { prisma } from "lib/prisma";
import {
  recipeIdParamSchema,
  recipeResponseSchema,
} from "schemas/recipe.schema";

export const getRecipesById = async (c: Context): Promise<Response> => {
  const params = recipeIdParamSchema.parse(c.req.param());

  const recipe = await prisma.recipe.findUnique({
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

  if (!recipe) {
    return c.json({ error: "Recette introuvable" }, 404);
  }

  const result = recipeResponseSchema.safeParse(recipe);

  if (!result.success) {
    return c.json(
      { error: "Erreur de validation", details: result.error.format() },
      500,
    );
  }

  return c.json(result.data, 200);
};
