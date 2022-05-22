import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do jogo',
    example: 'Street Fighter',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'URL da capa do jogo',
    example:
      'https://bdjogos.com.br/capas/3385-Street-Fighter-30th-Anniversary-Collection-capa-1.jpg',
  })
  coverImageUrl: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O ano de lançamento do jogo',
    example: 2018,
  })
  year: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  @ApiProperty({
    description: 'Nota IMDb do jogo. Valor de 1 a 5',
    example: 4,
  })
  imdbScore: number;

  @IsString()
  @ApiProperty({
    description: 'URL do trailer do jogo no YouTube',
    example: 'https://youtu.be/Q9iZROTh5Go',
  })
  trailerYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'URL da gameplay do jogo no YouTube',
    example: 'https://youtu.be/Q9iZROTh5Go',
  })
  GameplayYouTubeUrl: string;
}
