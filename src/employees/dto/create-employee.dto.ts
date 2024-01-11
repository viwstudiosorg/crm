import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, Min } from "class-validator";
import { EmployeeStatus } from "common/enums/emplyees.enum";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateEmployeeDto {
    // @ApiProperty({ type: Number, description: 'Employee Id', required: true })
    // @IsNumber()
    // @IsNotEmpty()
    // id: number;

    @ApiProperty({ type: String, description: 'Employee Name', required: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty({ type: Number, description: '', required: true })
    @IsNumber()
    @IsNotEmpty()
    position: number;

    @ApiProperty({ type: Number, description: '', required: true })
    @IsNumber()
    @IsNotEmpty()
    role: number

    @ApiProperty({ type: Number, description: '', required: true })
    @IsNumber()
    @IsNotEmpty()
    department: number

    // @ApiProperty({ type: Date, description: '', required: true })
    // @IsDateString()
    // @IsNotEmpty()
    // dob: Date

    // @ApiProperty({ type: Date, description: '', required: true })
    // @IsDateString()
    // @IsNotEmpty()
    // doj: Date

    @ApiProperty({ type: Number, description: '', required: true })
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    total_exp: number

    @ApiProperty({ type: Number, description: '', required: true })
    @IsPhoneNumber('IN', { message: 'Invalid phone number.' })
    @IsNotEmpty()
    phone: string

    // @ApiProperty({ type: String, description: '', required: true })
    // @IsEnum(EmployeeStatus, { message: 'Invalid employee status.' })
    // @IsNotEmpty()
    // status: string

    @ApiProperty({ type: String, description: '', required: true })
    @IsEmail({}, { message: 'Invalid email address.' })
    @IsNotEmpty()
    email: string
}

