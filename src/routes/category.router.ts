import { createCategory } from "controllers/category/create.category";
import { deleteCategory } from "controllers/category/delete.category";
import { getAllCategories } from "controllers/category/getAll.category";
import { getCategoryById } from "controllers/category/getById.category";
import { updateCategory } from "controllers/category/update.category";
import { Hono } from "hono";
import { withErrorHandler } from "lib/middlewares/withErrorHandler";

export const categoryRoute = new Hono();

categoryRoute.post("/", withErrorHandler(createCategory));
categoryRoute.patch("/:id", withErrorHandler(updateCategory));
categoryRoute.delete("/:id", withErrorHandler(deleteCategory));
categoryRoute.get("/", withErrorHandler(getAllCategories));
categoryRoute.get("/:id", withErrorHandler(getCategoryById));
