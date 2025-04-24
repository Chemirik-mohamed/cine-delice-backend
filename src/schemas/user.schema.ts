import { array, z } from "zod";
import { RecipeResponse } from "./recipe.schema";

export const userIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const CreateUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export const UserResponseSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  createdAt: z.date(),
  recipes: array(RecipeResponse).optional(),
});

export type UserWithRecipesResponse = z.infer<typeof UserResponseSchema>;
