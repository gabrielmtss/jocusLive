import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O título do perfil',
    example: 'Dani',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A URL da iamgem do perfil',
    example:
      'https://i1.sndcdn.com/avatars-VoyuhbQFYn39mfer-xN7oSA-t240x240.jpg',
  })
  imageUrl: string;
}
