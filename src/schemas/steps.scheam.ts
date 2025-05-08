import { z } from "zod";

// Pour valider un step complet (par exemple reçu depuis la base ou envoyé vers le client)
export const StepSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  order: z.number().int().min(1),
});

// Pour la création d’un step (côté backend, avant insertion)
export const StepInputSchema = z.object({
  content: z.string(),
  order: z.number(),
});

export type StepInput = z.infer<typeof StepInputSchema>;
