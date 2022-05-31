import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';
import { UpdateGameDto } from './dto/update-game.dto';

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
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gamesService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<Game> {
    return this.gamesService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gamesService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um, jogo pelo ID',
  })
  delete(@Param('id') id: string) {
    this.gamesService.delete(id);
  }
}
