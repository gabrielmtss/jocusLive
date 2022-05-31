import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do usuário',
    example: 'Gabriel',
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'O e-mail do usuário',
    example: 'gabriel@matos.com.br',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'A senha do usuário',
    example: 'feijao123',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação da para login',
    example: 'feijao123',
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'O CPF do usuário',
    example: '40478635983',
  })
  cpf: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Indica se o usuário é administrador',
    example: 'false',
  })
  isAdmin: boolean;
}
