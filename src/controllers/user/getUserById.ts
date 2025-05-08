import type { Context } from "hono";
import { prisma } from "lib/prisma";
import { userIdParamSchema } from "schemas/user.schema";
import type { UserWithRecipesResponse } from "schemas/user.schema";

export const getUserById = async (c: Context): Promise<Response> => {
  const params = userIdParamSchema.parse(c.req.param());
  const user: UserWithRecipesResponse | null = await prisma.user.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      email: true,
      username: true,
      createdAt: true,
      recipes: {
        select: {
          createdAt: true,
          id: true,
          title: true,
          description: true,
          imageUrl: true,
          userId: true,
          categoryId: true,
          showId: true,
          createdByName: true,
          createdByAvatar: true,
          steps: {
            select: {
              id: true,
              content: true,
              order: true,
            },
          },
          ingredients: {
            include: {
              ingredient: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(user);
};
