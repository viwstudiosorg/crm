import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly userRepo: Repository<User>) { }

    async findOne(username: string): Promise<User> {
        return await this.userRepo.findOne({ where: { username: username }, relations: { role: true } });
    }
}
