import { DatabaseModule } from './../database/database.module';
import { UsersResolvers } from './users.resolvers';
import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  // controllers: [UsersController],
  providers: [
    UsersService,
    UsersResolvers,
    ...usersProviders
  ],
})
export class UsersModule { }
