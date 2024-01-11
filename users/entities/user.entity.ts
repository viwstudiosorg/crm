import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string

    @Column()
    password: string

    @ManyToOne(type => Role, role => role.name)
    role: Role
}