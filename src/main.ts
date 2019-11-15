import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
   //Puerto predeterminado, se cambio a la sentencia de abajo para probar con Heroku
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
