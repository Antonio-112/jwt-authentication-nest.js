import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly _logger: Logger;
  constructor(private authService: AuthService) {
    super();
    this._logger = new Logger(LocalStrategy.name);
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      this._logger.error('UnauthorizedException: ' + username);
      throw new UnauthorizedException();
    }
    return user;
  }
}
