import { Employee } from "src/employees/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Position')
export class Position {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string

    @OneToMany(type => Employee, employee => employee.position)
    employees: Employee[]
}
