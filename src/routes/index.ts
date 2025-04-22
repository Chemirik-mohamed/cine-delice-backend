import { Hono } from "hono";
import { userRouter } from "./userRouter";

export const app = new Hono();

app.route("/", userRouter);
