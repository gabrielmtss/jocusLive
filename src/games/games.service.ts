import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }

  create(dto: CreateGameDto) {
    const data: Game = { ...dto };

    return this.prisma.game.create({ data });
  }

  update() {
    throw new Error('Method not implemented.');
  }

  delete() {
    throw new Error('Method not implemented.');
  }
}
