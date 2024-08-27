import { Repository } from "typeorm";
import { TUserCreation } from "../types/user.types";
import User from "../entities/User.entity";
import AppDataSource from "../data-source";
import UserDetails from "../entities/embed/UserDetails.entity";

export const createUser = async (payload:TUserCreation) => {

    const repo:Repository<User> = AppDataSource.getRepository(User);

    const user:User = repo.create(payload);
    user.details = new UserDetails(payload.details.firstName, payload.details.lastName);

    return await repo.save(user);
}