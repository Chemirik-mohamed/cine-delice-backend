import { title } from "process";
import { string, z } from "zod";
import { RecipeResponse } from "./recipe.schema";

export const createShow = z.object({
  title: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  typeShowId: z.string().uuid(),
  externalId: z.string(),
  recipes: z.array(RecipeResponse),
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

// model Show {
//     id          String   @id @default(uuid())
//     title       String
//     description String
//     releaseDate DateTime
//     imageUrl    String
//     typeShowId  String
//     externalId  String   @unique

//     typeShow TypeShow @relation(fields: [typeShowId], references: [id])
//     recipes  Recipe[]
//   }
