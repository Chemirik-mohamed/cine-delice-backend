import { z } from "zod";

export const CreateComment = z.object({
  content: z.string(),
  usersId: z.string().uuid(),
  recipesId: z.string().uuid(),
});

export type CreateCommentInput = z.infer<typeof CreateComment>;
