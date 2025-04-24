import { prisma } from "lib/prisma";
import { userIdParamSchema } from "schemas/user.schema";
import type { Context } from "hono";
import { z } from "zod";

export const getUserById = async (c: Context) => {
  try {
    const params = userIdParamSchema.parse(c.req.param());

    const user = await prisma.user.findMany({
      where: { id: params.id },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json(user);
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
