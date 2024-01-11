import { IsDate, IsDateString, IsEmail, IsEnum, IsNumber, IsPhoneNumber, MaxLength, Min } from "class-validator"
import { EmployeeStatus } from "common/enums/emplyees.enum";
import { Department } from "src/departments/entities/department.entity";
import { Position } from "src/positions/entities/position.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, IsNull, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'Employee'})
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToOne(type => Position, position => position.employees)
    position: Position;

    @ManyToOne(type => Role, role => role.employees)
    role: Role

    @ManyToOne(type => Department, department => department.employees)
    department: Department

    @Column({nullable:true})
    dob: Date

    @Column({nullable:true})
    doj: Date

    @Column()
    total_exp: number


    @Column()
    phone: string

    @Column({nullable:true})
    status: string

    @Column()
    email: string
}
