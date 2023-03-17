import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre del usuario' })
  readonly username: string;

  @ApiProperty({ description: 'Contraseña del usuario' })
  readonly password: string;
}
