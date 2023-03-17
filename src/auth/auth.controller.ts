import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiBearerAuth } from '@nestjs/swagger/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/users.schema';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth-guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@ApiTags('Auth Controller')
@Controller('auth')
export class AuthController {
  private readonly _logger: Logger;
  constructor(
    private readonly _authService: AuthService,
    private readonly _usersService: UsersService,
  ) {
    this._logger = new Logger(AuthController.name);
  }

  @ApiCreatedResponse({
    description: 'Devuelve un token Bearer',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    this._logger.verbose('Loging user');
    return this._authService.login(req.user);
  }

  @ApiCreatedResponse({
    description:
      'Retorna un objeto con el nombre de usurio y contraseña encriptada',
    status: 200,
  })
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this._usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description:
      'Usuario registrado exitosamente. Devuelve un objeto que contiene el token de acceso JWT',
    status: 203,
  })
  @ApiBadRequestResponse({
    status: 402,
    description: 'Error en autenticacion ',
  })
  @Post('verify')
  async verify(@Request() req) {
    return req.user;
  }
}
