import { z } from "zod";
import { IngredientSchema } from "./ingredient.schema";
import { StepSchema } from "./steps.scheam";
import { StepInputSchema } from "./steps.scheam";

export const recipeIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const CreateRecipeSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  categoryId: z.string().uuid(),
  showId: z.string().uuid(),
  steps: z.array(StepInputSchema),
});

export type CreateRecipeSchemaInput = z.infer<typeof CreateRecipeSchema>;

export const recipeResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.date(),
  userId: z.string().uuid().nullable().optional(),
  categoryId: z.string().uuid(),
  showId: z.string().uuid(),
  createdByName: z.string(),
  createdByAvatar: z.string().nullable().optional(),
  steps: z.array(StepSchema),
  ingredients: z.array(IngredientSchema),
});

export type RecipeResponse = z.infer<typeof recipeResponseSchema>;

export const createRecipeWithCategoryNameSchema = z.object({
  title: z.string().min(2, "Le titre est trop court"),
  description: z.string().min(5, "La description est trop courte"),
  imageUrl: z.string().url("Le lien de l’image est invalide"),
  userId: z.string().uuid("ID utilisateur invalide"),
  showId: z.string().uuid("ID de contenu invalide"),
  categoryName: z.string().min(2, "Le nom de la catégorie est requis"),
});

export type createRecipeWithCategoryNameSchemaInput = z.infer<
  typeof createRecipeWithCategoryNameSchema
>;

export const updateRecipeSchema = z
  .object({
    title: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    imageUrl: z.string().url().optional(),
    userId: z.string().uuid().optional(),
    categoryId: z.string().uuid().optional(),
    showId: z.string().uuid().optional(),
    steps: z.array(StepSchema).optional(),
    ingredients: z.array(IngredientSchema),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Vous devez fournir au moins un champ à mettre à jour",
  });

export type updateRecipe = z.infer<typeof updateRecipeSchema>;
