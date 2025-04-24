import { z } from "zod";

export const recipeIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const RecipeResponse = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  steps: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.date(),
  userId: z.string().uuid(),
  categoryId: z.string().uuid(),
  showId: z.string().uuid(),
});

export type RecipeResponseInput = z.infer<typeof RecipeResponse>;

export const CreateRecipe = z.object({
  title: z.string(),
  description: z.string(),
  steps: z.string(),
  imageUrl: z.string().url(),
  userId: z.string().uuid(),
  categoryId: z.string().uuid(),
  showId: z.string().uuid(),
});

export type CreateRecipeInput = z.infer<typeof CreateRecipe>;

export const createRecipeWithCategoryNameSchema = z.object({
  title: z.string().min(2, "Le titre est trop court"),
  description: z.string().min(5, "La description est trop courte"),
  steps: z.string().min(5, "Les étapes doivent faire au moins 5 caractères"),
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
    steps: z.string().min(5).optional(),
    imageUrl: z.string().url().optional(),
    userId: z.string().uuid().optional(),
    categoryId: z.string().uuid().optional(),
    showId: z.string().uuid().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Vous devez fournir au moins un champ à mettre à jour",
  });

export type UpdateRecipeInput = z.infer<typeof updateRecipeSchema>;
