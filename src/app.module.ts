import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ProductModule, 
    //importación en el módulo principal para el uso de la base de datos, usando 2 parametros opcionales por problemas de compatibilidad de versiones
    MongooseModule.forRoot('mongodb://localhost/products-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
