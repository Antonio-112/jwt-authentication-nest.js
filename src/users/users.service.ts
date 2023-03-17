import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersService {
  private readonly _logger: Logger;
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    this._logger = new Logger(UsersService.name);
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    this._logger.debug('Finding one by Username');
    return this.userModel.findOne({ username }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return newUser.save();
  }
}
