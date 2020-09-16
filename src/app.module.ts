import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`,
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
