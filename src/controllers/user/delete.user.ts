// import type { Context } from "hono";
// import { prisma } from "lib/prisma";
// import { userIdParamSchema } from "schemas/user.schema";
// import { userIdParamSchema } from "schemas/user.schema";

// export const deleteUser = async (c: Context) => {
//   const params = userIdParamSchema.parse(c.req.param());
//   const userId = params.id;
//   const user = await prisma.user.delete({
//     where: { id: userId },
//   });
// };
