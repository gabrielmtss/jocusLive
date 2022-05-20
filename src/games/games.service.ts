import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  findAll() {
    return 'Listar todas as mesas';
  }

  create(createGameDto: CreateGameDto) {
    return 'Adicionar um jogo: ' + JSON.stringify(createGameDto);
  }
}
