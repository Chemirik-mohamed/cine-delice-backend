import type { Context } from "hono";
import { prisma } from "lib/prisma";
import { recipeIdParamSchema } from "schemas/recipe.schema";

export const deleteReceipes = async (c: Context): Promise<Response> => {
  const params = recipeIdParamSchema.parse(c.req.param());

  const existing = await prisma.recipe.findUnique({ where: { id: params.id } });
  if (!existing) {
    return c.json({ error: "Recette introuvable" }, 404);
  }
  await prisma.$transaction([
    prisma.step.deleteMany({ where: { recipeId: params.id } }),
    prisma.recipeIngredient.deleteMany({ where: { recipeId: params.id } }),
    prisma.commentaire.deleteMany({ where: { recipeId: params.id } }),
    prisma.recipe.delete({ where: { id: params.id } }),
  ]);
  return c.json({ message: "Recette supprimée avec succès", id: params.id });
};
