import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto } from './users/dto/create-user.dto';

// import { LocalAuthGuard } from './auth/local-auth.guard';
// import { User } from './users/interface/user.interface';

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Post('register')
  @ApiOperation({ summary: 'Registration' })
  async register(
    @Body() createdUser: CreateUserDto
    // @Param('name') name: string,
    // @Param('birth') birth: Date,
    // @Param('email') email: string,
    // @Param('passw') hash: string,
    // @Param('image') image: string,
    // @Param('roles') roles: RoleEnum,
    // @Param('country') country: string,
  ) {
    // const createdUser = { name, birth, email, hash, image, roles, country }
    return this.authService.register(createdUser);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Param('email') email: string, @Param('pass') pass: string) {
    return this.authService.getAuthenticatedUser(email, pass);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
