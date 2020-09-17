import { Document } from 'mongoose';


export interface User extends Document {
  readonly birth: string,
  readonly name: string,
  readonly email: string,
  readonly hash: string,
  readonly salt: string,
  readonly image: string,
  readonly roles: {
    type: string,
    enum: ['admin', 'user', 'moderator'],
    default: 'user'
  },
  readonly country: string,
}