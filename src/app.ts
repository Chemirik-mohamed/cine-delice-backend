import { Hono } from "hono";
import { app } from "./routes/index";
export const honoApp = new Hono();

honoApp.route("/api", app);
