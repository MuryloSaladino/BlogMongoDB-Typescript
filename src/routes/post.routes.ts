import { Router } from "express";
import { createPostController, getPostsController } from "../controllers/post.controller";

const postRoutes = Router();

postRoutes.post("/posts", createPostController);
postRoutes.get("/posts", getPostsController)

export default postRoutes;