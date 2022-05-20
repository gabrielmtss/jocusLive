import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get()
  findById() {
    return this.gamesService.findById();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Put()
  update() {
    return this.gamesService.update();
  }

  @Delete()
  delete() {
    return this.gamesService.delete();
  }
}
