import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades que não estão no DTO
    forbidNonWhitelisted: true, // Retorna erro se enviarem propriedades indesejadas
    transform: true, // Converte os tipos automaticamente (ex: string para número)
  }))

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
