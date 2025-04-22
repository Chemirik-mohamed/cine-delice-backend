// src/router/userRouter.ts
import { Hono } from "hono";

import { createUser } from "controllers/user/createUser";
import { getUserById } from "controllers/user/getUserById";

export const userRouter = new Hono();

// Route pour créer un utilisateur
userRouter.post("/user", createUser);
userRouter.get("/user/:id", getUserById);
