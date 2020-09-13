import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

enum Roles { admin, user, moderator }
registerEnumType(Roles, {
  name: 'Roles',
})

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  birth?: string;

  @Field({ nullable: true })
  hash?: string;

  @Field({ nullable: true })
  salt?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(type => Roles)
  roles: Roles;

  @Field({ nullable: true })
  country?: string;
}