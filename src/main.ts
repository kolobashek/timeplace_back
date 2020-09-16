import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Mongoose } from 'mongoose';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  Mongoose.prototype.set('debug', true)
  // const definitionsFactory = new GraphQLDefinitionsFactory();
  // definitionsFactory.generate({
  //   typePaths: ['./src/**/*.graphql'],
  //   path: join(process.cwd(), 'src/graphql.schema.ts'),
  //   watch: true,
  //   emitTypenameField: true,
  //   outputAs: 'class',
  // });

  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
