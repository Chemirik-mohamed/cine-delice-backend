import { Hono } from "hono";

import { createUser } from "controllers/user/createUser";
import { deleteUser } from "controllers/user/delete.user";
import { getAllUsers } from "controllers/user/getAllUser";
import { getUserById } from "controllers/user/getUserById";
import { withErrorHandler } from "lib/middlewares/withErrorHandler";

export const userRoute = new Hono();

userRoute.post("/", withErrorHandler(createUser));
userRoute.get("/:id", withErrorHandler(getUserById));
userRoute.get("/", withErrorHandler(getAllUsers));
userRoute.get("/", withErrorHandler(getAllUsers));
userRoute.delete("/:id", withErrorHandler(deleteUser));
