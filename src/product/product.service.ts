import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    /*Las operaciones toman tienpo en la ocnsulta y se usa la sintaxis async en las funciones, junto con await para la busqueda*/

    //Operación por medio del método "find" para listar todos los productos de la base de datos
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    //Operación pro medio del método "findById" de buscar un productos por ID
    async getProduct(productID: string): Promise<Product>{
        const product = await this.productModel.findById(productID);
        return product;
    }

    //Creación de un producto con el uso de la clase CreateProductDTO a travez de el método "save()"
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const product =  new this.productModel(createProductDTO);
        await product.save();
        return product;

    }
    //Borrado de un producto por medio del método FindByIdAnDelete(), busca por id y lo elimina de la base de datos
    async deleteProduct(productID: string): Promise<Product>{
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;

    }
    //actualización de un producto por medio del método findByIdAndUpdate(), busca por id y actualiza los datos 
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product>{
        const updateProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true});
        return updateProduct;

    }


}
