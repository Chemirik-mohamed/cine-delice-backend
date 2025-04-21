import { router as userRouter } from "controllers/user/createUser";
import Router  from "hono/router";

export const app = Router()

app.route('/',userRouter)