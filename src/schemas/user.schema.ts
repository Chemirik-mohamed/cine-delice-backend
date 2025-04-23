import { array, z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const userIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const UserResponse = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  createdAt: z.date()
  recipes : array().optional()
})
