import { z } from "zod";

export const StepSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  order: z.number().optional(),
});

export const StepSchemaInput = z.object({
  content: z.string(),
  order: z.number().optional(),
});
