
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription, Int } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { User } from '../graphql.schema';
import { UsersGuard } from './Users.guard';
import { UsersService } from './Users.service';
import { CreateUserDto } from './dto/create-user.dto';

const pubSub = new PubSub();

@Resolver(of => User)
export class UsersResolvers {
  constructor(private usersService: UsersService) { }

  @Query(returns => [User])
  @UseGuards(UsersGuard)
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query(returns => User)
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number
  ) {
    return this.usersService.findOneById(id);
  }

  @Mutation('createUser')
  async create(@Args('createUserInput') args: CreateUserDto) {
    const createdUser = await this.usersService.create(args);
    pubSub.publish('userCreated', { userCreated: createdUser });
    return createdUser;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }
}