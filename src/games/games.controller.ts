import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo',
  })
  findById(@Param('id') id: string): Promise<Game> {
    return this.gamesService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<Game> {
    return this.gamesService.create(dto);
  }

  @Put()
  @ApiOperation({
    summary: 'Atualizar um jogo',
  })
  update() {
    return this.gamesService.update();
  }

  @Delete()
  @ApiOperation({
    summary: 'Deletar um jogo',
  })
  delete() {
    return this.gamesService.delete();
  }
}
