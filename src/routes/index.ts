import { Hono } from "hono";
import { recipesRoute } from "./recipes.router";
import { userRoute } from "./userRouter";

export const app = new Hono();

app.route("/users", userRoute);
app.route("/recipes", recipesRoute);
