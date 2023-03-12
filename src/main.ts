import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Todolist API documentation')
    .setDescription(
      'This API allows you to perform basic operations ( CRUD ) with cases in your to - do list\n' +
        'The app was created as a learning project',
    )
    .setVersion('1.0.0')
    .addTag('')
    .build();

  const documentation = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs/', app, documentation);

  await app.listen(PORT);
}

start();
