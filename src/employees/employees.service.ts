import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DataSource, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PositionsService } from 'src/positions/positions.service';
import { DepartmentsService } from 'src/departments/departments.service';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class EmployeesService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
    private readonly positionService: PositionsService,
    private readonly departmentService: DepartmentsService,
    private readonly roleService: RolesService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const [position, role, department] = await Promise.all([
      this.positionService.findOne(createEmployeeDto.position),
      this.roleService.findOne(createEmployeeDto.role),
      this.departmentService.findOne(createEmployeeDto.department),
    ]);

    if (!position)
      throw new HttpException('Invalid position', HttpStatus.NOT_FOUND);
    //Todo : Handle errors for role and department
    const employeeId = uuid();
    try {
      const employee = queryRunner.manager.save(Employee, {
        id: employeeId,
        name: createEmployeeDto.name,
        position: position,
        role: role,
        department: department,
        // dob: createEmployeeDto.dob,
        // doj: createEmployeeDto.doj,
        total_exp: createEmployeeDto.total_exp,
        phone: createEmployeeDto.phone,
        // status: createEmployeeDto.status,
        email: createEmployeeDto.email,
      });
      await queryRunner.commitTransaction();
      return employee;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(page: number = 1) {
    // const pageSize = 12
    // const skip = (page - 1) * pageSize;

    const data = await this.employeeRepo
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.department', 'department')
      .leftJoinAndSelect('employee.role', 'role')
      .leftJoinAndSelect('employee.position', 'position')
      // .skip(skip)
      // .take(pageSize)
      .getMany();
    return { data, page };
  }

  async findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
