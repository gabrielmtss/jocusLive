import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  findAll() {
    return 'Listar todas as mesas';
  }

  create() {
    return 'Adicionar um jogo';
  }
}
