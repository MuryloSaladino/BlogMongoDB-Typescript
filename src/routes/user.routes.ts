import { Router } from "express";
import { createUserController } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("/users", createUserController)

export default userRoutes;