import { CreateUserInput } from './../../graphql.schema';
// import { Document } from 'mongoose';
// import * as mongoose from 'mongoose';
import {
  // Prop,
  Schema,
  SchemaFactory
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

const RoleEnum = ['admin', 'user', 'moderator']

@Schema()
export class CreateUserDto extends CreateUserInput {
  @ApiProperty()
  id: number;

  // @Prop({ unique: true })
  @ApiProperty()
  name: string;

  // @Prop()
  @ApiProperty()
  birth: string;

  // @Prop({ required: true, unique: true })
  @ApiProperty()
  email: string;

  // @Prop({ required: true })
  @ApiProperty()
  hash: string;

  // @Prop({ required: true })
  @ApiProperty()
  salt: string;

  // @Prop()
  @ApiProperty()
  image?: string;

  @ApiProperty({ enum: RoleEnum, default: 'user', isArray: true })
  roles: typeof RoleEnum[] = [];

  // @Prop()
  @ApiProperty()
  country?: string;
}

export const UserSchema = SchemaFactory.createForClass(CreateUserDto);