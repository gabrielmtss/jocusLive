import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  genders: Gender[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.gender.findMany();
  }

  findById() {
    throw new Error('Method not implemented.');
  }

  create(createGenderDto: CreateGenderDto) {
    const gender: Gender = { id: 'random id', ...createGenderDto };

    this.genders.push(gender);

    return gender;
  }

  update() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }
}
