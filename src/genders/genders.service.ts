import { Injectable } from '@nestjs/common';
import { createGenderDto } from './dto/create-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  genders: Gender[] = [];

  findAll() {
    return this.genders;
  }

  findById() {
    throw new Error('Method not implemented.');
  }

  create(createGenderDto: createGenderDto) {
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
