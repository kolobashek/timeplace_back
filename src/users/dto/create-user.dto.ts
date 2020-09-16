import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

const RoleEnum = ['admin', 'user', 'moderator']

@Schema()
export class CreateUserDto {

  @ApiProperty({ type: String })
  readonly name: string;

  @ApiProperty({ type: String })
  readonly birth: string;

  @ApiProperty({ type: String })
  readonly email: string;

  @ApiProperty({ type: String })
  readonly hash: string;

  @ApiProperty({ type: String })
  readonly salt: string;

  @ApiProperty({ type: String })
  readonly image?: string;

  @ApiProperty({ enum: RoleEnum, default: 'user', type: String })
  readonly roles: typeof RoleEnum[] = [];

  @ApiProperty({ type: String })
  readonly country?: string;
}