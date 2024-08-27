import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import Post from "../entities/Post.entity";
import { TPostCreation } from "../types/post.types";

export const createPost = async (payload:TPostCreation) => {

    const repo:Repository<Post> = AppDataSource.getRepository(Post);

    const post = repo.create(payload);
    post.comments = []

    return await repo.save(post)
}

export const retrievePosts = async () => {

    const repo:Repository<Post> = AppDataSource.getRepository(Post)

    return await repo.find()
}