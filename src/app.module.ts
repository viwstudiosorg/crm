import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';
import { RolesModule } from './roles/roles.module';
import { PositionsModule } from './positions/positions.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [EmployeesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db.qhuflryacbjwzzxfbxqr.supabase.co',
    port: 5432,
    username: 'postgres',
    password: '4eVLtzyMYzerA1FO',
    database: 'postgres',
    autoLoadEntities:true,
    synchronize: true ,
  }), RolesModule, PositionsModule, DepartmentsModule, AuthModule, UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
