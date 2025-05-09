import { Hono } from "hono";
import { recipesRoute } from "./recipes.router";
import { userRoute } from "./userRouter";
import { categoryRoute } from "./category.router";

export const app = new Hono();

app.route("/users", userRoute);
app.route("/recipes", recipesRoute);
app.route("/categories", categoryRoute);
