import { z } from "zod";

import { recipeResponseSchema } from "./recipe.schema";

export const createShow = z.object({
  title: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  typeShowId: z.string().uuid(),
  externalId: z.string(),
  recipes: z.array(recipeResponseSchema),
});

export type createShowInput = z.infer<typeof createShow>;

export const ResponseShow = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  imageUrl: z.string(),
  typeShowId: z.string().uuid(),
  externalId: z.string(),
});
