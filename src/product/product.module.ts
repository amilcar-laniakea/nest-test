import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./schemas/product.schema";

@Module({
  //Importación de los recursos mongoose pasa el uso de esa base de datos 
  // por medio del método forFeature se usa el formato proviniente del Objeto ProductSchema
  imports: [
    MongooseModule.forFeature([
      {name: 'Product', schema: ProductSchema}
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
