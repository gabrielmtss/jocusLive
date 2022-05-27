import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany();
  }

  findById() {
    throw new Error('Method not implemented.');
  }

  create(createGameDto: CreateGameDto) {
    const game: Game = { id: 'random id', ...createGameDto };

    this.games.push(game);

    return game;
  }

  update() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }
}
