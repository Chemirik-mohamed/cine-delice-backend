import type { Context } from "hono";
import { prisma } from "lib/prisma";
import { userIdParamSchema } from "schemas/user.schema";
import { deleteUserBodySchema } from "schemas/user.schema";

import type { User } from "../../../generated/prisma";

export const deleteUser = async (c: Context) => {
  const params = userIdParamSchema.parse(c.req.param());
  const body = await c.req.json();

  const existing = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!existing) {
    return c.json({ error: "user not found" }, 404);
  }

  const { deleteRecipes } = deleteUserBodySchema.parse(body);

  let deletedUser: User;

  if (deleteRecipes) {
    const [, , user] = await prisma.$transaction([
      prisma.comment.deleteMany({ where: { userId: params.id } }),
      prisma.recipe.deleteMany({ where: { userId: params.id } }),
      prisma.user.delete({ where: { id: params.id } }),
    ]);
    deletedUser = user;
  } else {
    deletedUser = await prisma.user.delete({
      where: { id: params.id },
    });
  }

  const { password, ...publicUser } = deletedUser;

  return c.json({
    message: "Utilisateur supprimé avec succès",
    user: publicUser,
  });
};
