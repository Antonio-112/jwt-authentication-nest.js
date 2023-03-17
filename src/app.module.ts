import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VerificationModule } from './verification/verification.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://dbUser:Admin@cluster0.x0yn4gc.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
    VerificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
