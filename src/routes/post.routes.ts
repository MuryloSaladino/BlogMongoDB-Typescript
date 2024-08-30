import { Router } from "express";
import { createPostController, getPostsController } from "../controllers/post.controller";

const postRoutes = Router();

postRoutes.post("/:idUser", createPostController);
postRoutes.get("", getPostsController)

export default postRoutes;