import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //await app.listen(3000); //Puerto predeterminado, se cambio a la sentencia de abajo para probar con Heroku
  await app.listen(port);
}
bootstrap();
