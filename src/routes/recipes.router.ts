import { Hono } from "hono";

import { createrecipes } from "controllers/recipes/create.recipes";
import { deleteReceipes } from "controllers/recipes/recipes.delete";
import { getAllRecipes } from "controllers/recipes/recipes.getAll";
import { getRecipesById } from "controllers/recipes/recipes.getById";
import { updateRecipe } from "controllers/recipes/recipes.update";
import { withErrorHandler } from "lib/middlewares/withErrorHandler";

export const recipesRoute = new Hono();

recipesRoute.post("/", withErrorHandler(createrecipes));
recipesRoute.delete("/:id", withErrorHandler(deleteReceipes));
recipesRoute.patch("/:id", withErrorHandler(updateRecipe));
recipesRoute.get("/", withErrorHandler(getAllRecipes));
recipesRoute.get("/:id", withErrorHandler(getRecipesById));
