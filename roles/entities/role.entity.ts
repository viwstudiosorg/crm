import { Employee } from "src/employees/entities/employee.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Role')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string

    @OneToMany(type => Employee, employee => employee.role)
    employees: Employee[]

    @OneToMany(type => User, user => user.id)
    user: User
}
