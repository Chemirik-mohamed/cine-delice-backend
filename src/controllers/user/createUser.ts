import { prisma } from "lib/prisma";
import { createUserSchema } from "schemas/user.schema";
import type { Context } from "hono";
import { hashPassword } from "lib/bcrypt";
import { z } from "zod";
// import  { git  } from "schemas/user.schema";

export const createUser = async (c: Context): Promise<Response> => {
  try {
    const userData = await c.req.json();

    const validatedData = createUserSchema.parse(userData);

    const { username, email, password } = validatedData;

    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return c.json(newUser, 201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json({ error: error.errors }, 400);
    }

    return c.json(
      { error: "Internal server error", details: String(error) },
      500,
    );
  }
};
