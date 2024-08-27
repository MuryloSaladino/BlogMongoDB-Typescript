import { Column } from "typeorm";

export default class UserDetails {

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
}