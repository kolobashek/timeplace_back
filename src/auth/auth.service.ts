import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async register(registrationData: CreateUserDto) {
    console.log('register: ', registrationData.hash + `1n7a`);
    const hashedPass = await bcrypt.hash(registrationData.hash + `1n7a`, 13)
    try {
      const user = await this.usersService.create({
        ...registrationData,
        hash: hashedPass
      })
      const { hash, ...userSafe } = user
      return userSafe
    } catch (error) {
      if (error?.code === 500) {
        throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // async validateUser(email: string, pass: string): Promise<any> {
  //   try {
  //     const user = await this.usersService.getByEmail(email);
  //     // TODO: Здесь нужен bcrypt
  //     if (user && user.hash === pass) {
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //       const { hash, ...result } = user;
  //       return result;
  //     }
  //     return null;
  //   } catch (error) {

  //   }
  // }
  public async getAuthenticatedUser(email: string, hashedPassword: string) {
    try {
      const user = await this.usersService.getByEmail(email);
      console.log('auth: ', hashedPassword + `1n7a`);
      const isPasswordMatching = await bcrypt.compare(
        hashedPassword + `1n7a`,
        user.hash
      );
      if (!isPasswordMatching) {
        throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      }
      const { hash, ...safeUser } = user;
      return safeUser;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
