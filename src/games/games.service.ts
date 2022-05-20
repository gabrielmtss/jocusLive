import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  games: Game[] = [];

  findAll() {
    return this.games;
  }

  create(createGameDto: CreateGameDto) {
    const game: Game = { id: 'random id', ...createGameDto };

    this.games.push(game);

    return game;
  }
}
