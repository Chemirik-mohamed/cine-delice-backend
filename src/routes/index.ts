import { Hono } from "hono";
import { userRoute } from "./userRouter";

export const app = new Hono();

app.route("/users", userRoute);
