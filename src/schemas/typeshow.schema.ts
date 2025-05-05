import { z } from "zod";
import { ResponseShow } from "./show.schema";

export const CreateTypeShowSchema = z.object({
  name: z.string().min(1, "Le nom est requis."),
});

export type CreateTypeShowInput = z.infer<typeof CreateTypeShowSchema>;

export const ResponseTypeShow = z.object({
  id: z.string().uuid(),
  name: z.string(),
  shows: z.array(ResponseShow),
});

export type ResponseTypeShowType = z.infer<typeof ResponseTypeShow>;
