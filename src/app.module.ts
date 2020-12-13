import { config as Config } from 'dotenv'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { MongooseModule } from '@nestjs/mongoose'
import { default as configuration } from './config'
import { ConfigModule, ConfigService } from '@nestjs/config'
// import { ConfigService } from 'nestjs-dotenv';

Config()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
            expandVariables: true,
        }),
        MongooseModule.forRootAsync({
            useFactory: () => {
                const userString =
                    process.env.DB_USER && process.env.DB_PASS
                        ? process.env.DB_USER + ':' + process.env.DB_PASS + '@'
                        : ''
                const authSource = process.env.DB_AUTHBASE
                    ? '?authSource=' + process.env.DB_AUTHBASE + '&w=1'
                    : ''
                const uri = `mongodb://${userString}${
                    process.env.DB_HOST
                }:${process.env.DB_PORT || '27017'}/${
                    process.env.DB_BASE
                }${authSource}`
                console.log(uri)
                return {
                    uri: uri,
                    useFindAndModify: false
                }
            },
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
