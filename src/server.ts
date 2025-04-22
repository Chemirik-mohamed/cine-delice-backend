import { serve } from "@hono/node-server";

import { honoApp } from "./app";

serve({ fetch: honoApp.fetch, port: 3000 });

console.log("✅ Listening on http://localhost:3000");
