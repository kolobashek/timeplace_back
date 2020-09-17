import { Model, Types } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getOne(_id: string): Promise<User> {
    return this.userModel.findOne({ _id }).exec();
  }

  async getByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async delete(_id: string): Promise<User> {
    return (await this.userModel.findOne({ _id })).deleteOne();
  }

  async update(_id: Types.ObjectId): Promise<User> {
    return this.userModel.findOne({ _id }).remove().exec();
  }

  async deleteAll(): Promise<User[]> {
    return this.userModel.find().remove().exec();
  }
}
