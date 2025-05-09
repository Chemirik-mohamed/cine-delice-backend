import { z } from "zod";

export const paramIdSchema = z.object({
  id: z.string().min(1).uuid(),
});
export type paramIdSchemaInput = z.infer<typeof paramIdSchema>;

export const CreateCategorySchema = z.object({
  name: z.string().min(1),
});
export type CreateCategorySchemaInput = z.infer<typeof CreateCategorySchema>;

// Définit le schéma de validation pour la mise à jour d'une catégorie
// Il requiert un nom d'au moins 1 caractère
export const UpdateCategorySchema = z.object({
  name: z.string().min(1),
});

// Crée un type TypeScript basé sur le schéma de mise à jour
export type UpdateCategorySchemaInput = z.infer<typeof UpdateCategorySchema>;

export const DeleteCategorySchema = z.object({
  id: z.string().min(1),
});
export type DeleteCategorySchemaInput = z.infer<typeof DeleteCategorySchema>;

export const GetCategoryByIdSchema = z.object({
  id: z.string().min(1),
});
export type GetCategoryByIdSchemaInput = z.infer<typeof GetCategoryByIdSchema>;

export const GetAllCategoriesSchema = z.object({
  id: z.string().min(1),
});
export type GetAllCategoriesSchemaInput = z.infer<
  typeof GetAllCategoriesSchema
>;
