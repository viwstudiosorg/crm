import { Employee } from "src/employees/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Department')
export class Department {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string
    
    @OneToMany(type => Employee, employee => employee.department)
    employees: Employee[]
}
