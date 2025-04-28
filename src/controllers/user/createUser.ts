import type { Context } from "hono";
import { hashPassword } from "lib/bcrypt";
import { prisma } from "lib/prisma";
import { CreateUserSchema } from "schemas/user.schema";
import type { CreateUserInput } from "schemas/user.schema";

export const createUser = async (c: Context): Promise<Response> => {
  const userData = await c.req.json();

  const validatedData: CreateUserInput = CreateUserSchema.parse(userData);

  const { username, email, password: rawPassword } = validatedData;

  const hashedPassword = await hashPassword(rawPassword);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  const { password, ...userWithoutPassword } = newUser;

  return c.json(userWithoutPassword, 201);
};
