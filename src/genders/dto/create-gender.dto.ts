import { IsString } from 'class-validator';

export class createGenderDto {
  @IsString()
  name: string;
}
