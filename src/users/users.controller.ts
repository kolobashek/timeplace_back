import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
// import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { User } from './interface/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  // @UseGuards(JwtAuthGuard)
  @Post('add')
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto)
  }
  // @UseGuards(JwtAuthGuard)
  @Get('id=:id')
  async getUser(@Param('id') id: string): Promise<User[]> {
    return this.userService.getOne(id)
  }
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll()
  }
  @Get('deleteall')
  async deleteAllUsers() {
    return this.userService.deleteAll()
  }
  @Get('delete=:id')
  async deleteUser(@Param('id') id: string): Promise<User[]> {
    return this.userService.delete(id)
  }
}
