
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Roles {
    admin = "admin",
    moderator = "moderator",
    user = "user"
}

export class CreateUserInput {
    name?: string;
    email?: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract getUsers(): User[] | Promise<User[]>;

    abstract findOneById(id: string): User | Promise<User>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
}

export abstract class ISubscription {
    __typename?: 'ISubscription';

    abstract userCreated(): User | Promise<User>;
}

export class User {
    __typename?: 'User';
    id?: number;
    name: string;
    birth?: string;
    email: string;
    hash?: string;
    salt?: string;
    image?: string;
    roles: Roles[];
    country?: string;
}
