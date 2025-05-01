import type { Context } from "hono";
import { formatSteps } from "lib/formatSteps";
import { prisma } from "lib/prisma";
import { CreateRecipeSchema } from "schemas/recipe.schema";
import type { CreateRecipeSchemaInput } from "schemas/recipe.schema";

export const createrecipes = async (c: Context): Promise<Response> => {
  const recipesData = await c.req.json();

  const validatedData: CreateRecipeSchemaInput =
    CreateRecipeSchema.parse(recipesData);

  const { title, description, imageUrl, categoryId, showId, steps } =
    validatedData;
  const cleanedSteps = formatSteps(steps);

  const user = c.get("user");

  const createdByName = user?.name ?? "Utilisateur supprimé";

  const userId = user?.id ?? null;

  const newRecipes = await prisma.recipe.create({
    data: {
      title,
      description,
      imageUrl,
      categoryId,
      showId,
      createdByName,
      userId,
      steps: {
        create: cleanedSteps,
      },
    },
    include: {
      steps: true,
    },
  });
  return c.json(newRecipes, 201);
};
