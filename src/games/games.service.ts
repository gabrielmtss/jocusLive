import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };

    return this.prisma.game.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...dto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);

    return undefined;
  }
}
