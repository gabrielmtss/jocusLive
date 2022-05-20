import { IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  coverImageUrl: string;

  @IsNumber()
  @IsPositive()
  year: number;

  @IsNumber()
  @Min(1)
  @Max(5)
  imdbScore: number;

  @IsString()
  trailerYouTubeUrl: string;

  @IsString()
  GameplayYouTubeUrl: string;
}
