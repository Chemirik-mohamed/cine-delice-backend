import { Hono } from "hono";
import { app as routes } from "./routes/index";
export const app = new Hono();

app.route("/api", routes);
