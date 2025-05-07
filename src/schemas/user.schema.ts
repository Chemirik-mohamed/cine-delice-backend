import { array, z } from "zod";
import { recipeResponseSchema } from "./recipe.schema";

export const userIdParamSchema = z.object({
  id: z.string().uuid(),
});

export type userIdParamSchemaInput = z.infer<typeof userIdParamSchema>;

export const CreateUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Le mot de passe doit faire au moins 8 caractères")
    .max(100),
  avatar: z.string().nullable().optional(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export const UserResponseSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  createdAt: z.date(),
  recipes: array(recipeResponseSchema).optional(),
  avatar: z.string().nullable().optional(),
});

export type UserWithRecipesResponse = z.infer<typeof UserResponseSchema>;
export const PublicUserSchema = UserResponseSchema.omit({ recipes: true });
export type PublicUser = z.infer<typeof PublicUserSchema>;

export const deleteUserBodySchema = z.object({
  deleteRecipes: z.boolean().default(false),
});
