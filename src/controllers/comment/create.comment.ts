import { Prisma } from "@prisma/client";
import type { Context } from "hono";
import { prisma } from "lib/prisma";
import { CreateComment } from "schemas/commentaire.schema";

export const createComment = async (c: Context): Promise<Response> => {
  const body = c.req.json();
  const data = CreateComment.parse(body);
  const comment = await prisma.comment.create({
    data: {
      content: data.content,
      user: { connect: { id: data.usersId } },
      recipe: { connect: { id: data.recipesId } },
    },
  });
  return c.json(comment);
};
