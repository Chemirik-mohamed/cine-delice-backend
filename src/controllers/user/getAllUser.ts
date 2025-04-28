import type { Context } from "hono";
import { prisma } from "lib/prisma";
import type { UserWithRecipesResponse } from "schemas/user.schema";

export const getAllUsers = async (c: Context): Promise<Response> => {
  const users: UserWithRecipesResponse[] = await prisma.user.findMany({
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
        },
      },
    },
  });
  return c.json(users);
};
