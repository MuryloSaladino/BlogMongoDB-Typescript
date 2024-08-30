import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn } from "typeorm";
import Comment from "./embed/Comment.entity";

@Entity()
export default class Post {

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    content: string;

    @Column(_ => Comment)
    comments: Comment[];

    @CreateDateColumn()
    createdAt: string;

    @Column({ unique: true })
    likes: ObjectId[];
}