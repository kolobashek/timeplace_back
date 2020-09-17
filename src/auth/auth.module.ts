import { DatabaseModule } from './../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './../users/users.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { usersProviders } from '../users/users.providers';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule,
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsersService,
    ...usersProviders
  ],
  exports: [AuthService],
})
export class AuthModule { }
