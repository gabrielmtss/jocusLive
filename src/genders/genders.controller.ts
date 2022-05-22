import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('genders')
export class GendersController {
  gendersService: any;
  @Get()
  findAll() {
    return this.gendersService.findAll();
  }

  @Get()
  findById() {
    return this.gendersService.findById();
  }

  @Post()
  create() {
    return this.gendersService.create();
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
