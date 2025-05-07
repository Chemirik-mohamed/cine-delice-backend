import { z } from "zod";

export const IngredientSchema = z.object({
  ingredient: z.object({
    id: z.string().uuid(),
    name: z.string(),
  }),
  recipeId: z.string().uuid(),
  ingredientId: z.string().uuid(),
  quantity: z.string().nullable(),
});
