import type { Context } from "hono";
import type { Handler } from "types/handler";
import { z } from "zod";

export const withErrorHandler = (handler: Handler) => {
  return async (c: Context): Promise<Response> => {
    try {
      return await handler(c);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return c.json({ error: error.errors }, 400);
      }

      return c.json(
        { error: "Internal server error", details: String(error) },
        500,
      );
    }
  };
};
