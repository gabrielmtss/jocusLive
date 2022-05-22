import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGenderDto } from './dto/create-gender.dto';
import { GendersService } from './genders.service';

@ApiTags('genders')
@Controller('genders')
export class GendersController {
  constructor(private gendersService: GendersService) {}

  @Get()
  findAll() {
    return this.gendersService.findAll();
  }

  @Get()
  findById() {
    return this.gendersService.findById();
  }

  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.gendersService.create(createGenderDto);
  }

  @Put()
  update() {
    return this.gendersService.update();
  }

  @Delete()
  delete() {
    return this.gendersService.delete();
  }
}
