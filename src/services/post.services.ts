import { ObjectId, Repository } from "typeorm";
import AppDataSource from "../data-source";
import Post from "../entities/Post.entity";
import { TPostCreation } from "../types/post.types";
import User from "../entities/User.entity";
import { AppError } from "../errors";

export const createPost = async (idUser:string, payload:TPostCreation) => {

    const postRepo:Repository<Post> = AppDataSource.getMongoRepository(Post);
    const userRepo:Repository<User> = AppDataSource.getMongoRepository(User);

    console.log("idUser:", idUser)
    console.log("id:",  ObjectId.createFromHexString(idUser))

    const user:User|null = await userRepo.findOne(
        { where: { id: ObjectId.createFromHexString(idUser) } }
    );
    if(!user) throw new AppError("User not found");

    const post = postRepo.create(payload);
    post.comments = [];
    post.creatorId = user.id;

    return await postRepo.save(post);
}

export const retrievePosts = async () => {

    const repo:Repository<Post> = AppDataSource.getMongoRepository(Post)

    return await repo.find()
}