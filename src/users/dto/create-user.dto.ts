import { IsEmail, IsString, MaxLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

// DTO = interface + validator