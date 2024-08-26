import { Column, CreateDateColumn, ObjectId, ObjectIdColumn } from "typeorm";

export default class Comment {

    @ObjectIdColumn()
    id: ObjectId;

    @CreateDateColumn()
    createdAt: string;

    @Column()
    content: string;

    constructor(content:string) {
        this.content = content;
        this.createdAt = new Date().getTime().toString()
    }
}