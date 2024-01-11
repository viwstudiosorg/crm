import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionsService {
  constructor(@InjectRepository(Position)
  private readonly positionRepo: Repository<Position>) { }
  create(createPositionDto: CreatePositionDto) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all positions`;
  }

  async findOne(id: number) {
    return await this.positionRepo.findOne({ where: { id } });
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
