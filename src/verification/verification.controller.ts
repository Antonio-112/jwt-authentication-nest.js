import { Controller, Get, UseGuards, Req, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Verification Controller')
@Controller('verification')
export class VerificationController {
  private readonly _logger: Logger;
  constructor() {
    this._logger = new Logger(VerificationController.name);
  }
  @Get('auth')
  @UseGuards(AuthGuard('jwt'))
  async verify(@Req() req): Promise<any> {
    this._logger.debug('Verificancion exitosa');
    return {
      message: 'Usuario autenticado exitosamente',
      user: req.user,
    };
  }
}
