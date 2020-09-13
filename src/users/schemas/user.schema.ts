// import { Document } from 'mongoose';
// // import * as mongoose from 'mongoose';
// import {
//   // Prop,
//   Schema,
//   SchemaFactory
// } from '@nestjs/mongoose';
// import { ApiProperty } from '@nestjs/swagger';

// const RoleEnum = ['admin', 'user', 'moderator']

// @Schema()
// export class User extends Document {
//   // @Prop({ unique: true })
//   @ApiProperty()
//   name: string;

//   // @Prop()
//   @ApiProperty()
//   birth: Date;

//   // @Prop({ required: true, unique: true })
//   @ApiProperty()
//   email: string;

//   // @Prop({ required: true })
//   @ApiProperty()
//   hash: string;

//   // @Prop({ required: true })
//   @ApiProperty()
//   salt: string;

//   // @Prop()
//   @ApiProperty()
//   image: string;

//   @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
//   roles: typeof RoleEnum[] = [];

//   // @Prop()
//   @ApiProperty()
//   country: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  birth: String,
  email: String,
  hash: String,
  salt: String,
  image: String,
  roles: {
    enum: ['user', 'admin', 'moderator'],
  },
  country: String,
});