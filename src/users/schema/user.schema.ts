import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  birth: String,
  name: String,
  email: String,
  hash: String,
  salt: String,
  image: String,
  roles: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
  country: String,
})
