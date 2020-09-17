import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export enum RoleEnum { admin, user, moderator }
@Schema()
export class CreateUserDto {

  @ApiProperty({ type: String })
  // @Prop()
  readonly name: string;

  @ApiProperty({ type: Date })
  // @Prop()
  readonly birth: Date;

  @ApiProperty({ type: String })
  // @Prop()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ type: String })
  // @Prop()
  readonly hash?: string;

  @ApiProperty({ type: String })
  // @Prop()
  readonly image?: string;

  @ApiProperty({ enum: RoleEnum, default: 'user', type: String })
  // @Prop()
  readonly roles: RoleEnum;

  @ApiProperty({ type: String })
  // @Prop()
  readonly country?: string;
}