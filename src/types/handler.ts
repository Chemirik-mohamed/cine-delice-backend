import type { Context } from "hono";

export type Handler = (c: Context) => Promise<Response>;
