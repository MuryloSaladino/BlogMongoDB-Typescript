import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn } from "typeorm";
import Comment from "./embed/Comment.entity";

@Entity()
export default class Post {

    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    content: string;

    @ObjectIdColumn({ generated: false })
    creatorId: ObjectId;

    @Column(_ => Comment)
    comments: Comment[];

    @Column({ unique: true })
    likes: ObjectId[];

    @CreateDateColumn()
    createdAt: string;
}