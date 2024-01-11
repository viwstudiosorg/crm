import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { PositionsModule } from 'src/positions/positions.module';
import { RolesModule } from 'src/roles/roles.module';
import { DepartmentsModule } from 'src/departments/departments.module';
import { PositionsService } from 'src/positions/positions.service';
import { DepartmentsService } from 'src/departments/departments.service';
import { RolesService } from 'src/roles/roles.service';
import { Position } from 'src/positions/entities/position.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Role } from 'src/roles/entities/role.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Position, Department, Role])],
  controllers: [EmployeesController],
  providers: [EmployeesService, PositionsService, DepartmentsService, RolesService],
})
export class EmployeesModule { }
