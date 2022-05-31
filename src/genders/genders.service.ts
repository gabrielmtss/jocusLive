import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.gender.findMany();
  }

  findById() {
    throw new Error('Method not implemented.');
  }

  create(dto: CreateGenderDto) {
    const data: Gender = { ...dto };

    return this.prisma.gender.create({ data });
  }

  update() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }
}
