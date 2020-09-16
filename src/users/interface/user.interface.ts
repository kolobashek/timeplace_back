import { Document } from 'mongoose';

enum Roles { admin, user, moderator }

export interface User extends Document {
  readonly birth: string,
  readonly name: string,
  readonly email: string,
  readonly hash: string,
  readonly salt: string,
  readonly image: string,
  readonly roles: Roles,
  readonly country: string,
}