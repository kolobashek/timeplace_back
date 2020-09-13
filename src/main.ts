import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    // .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const definitionsFactory = new GraphQLDefinitionsFactory();
  definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.schema.ts'),
    watch: true,
    emitTypenameField: true,
    outputAs: 'class',
  });

  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
