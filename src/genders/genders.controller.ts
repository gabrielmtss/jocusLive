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
import { Gender } from './entities/gender.entity';
import { CreateGenderDto } from './dto/create-gender.dto';
import { GendersService } from './genders.service';
import { UpdateGenderDto } from './dto/update-gender.dto';

@ApiTags('genders')
@Controller('genders')
export class GendersController {
  constructor(private gamesService: GendersService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas os jogos',
  })
  findAll(): Promise<Gender[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo',
  })
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.gamesService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() dto: CreateGenderDto): Promise<Gender> {
    return this.gamesService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGenderDto,
  ): Promise<Gender> {
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
