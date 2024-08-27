import { Request, Response } from "express";
import { createUser } from "../services/user.services";

export const createUserController = async (req:Request, res:Response) => {

    const service = await createUser(req.body);

    res.status(201).json({ ...service, password: undefined });
}