import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from "./interfaces/product.interface";

@Controller('user')
export class ProductController {

    constructor(private productService: ProductService){}
    //Crear un registro en la base de datos usando parámetros Res(Response) y Body
    //Otorga una respuesta por mensaje del producto creado
    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO  ) {
        //console.log(createProductDTO)
        //Guarda en variable "product" la petición hecha
        const product = await this.productService.createProduct(createProductDTO);
        //console.log(product);
        //Muestra por medio del protocolo Http con formato json la creación del producto
        return res.status(HttpStatus.OK).json ({
            message: 'User Created Succesfully',
            product
        });

    }
    //Hacer una consulta a la base de datos de todos los productos registrados
    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        //Muestra por medio del protocolo Http con formato json la lista de productos
        return res.status(HttpStatus.OK).json({
            message: 'List of Users in System',
            products
        });
    }
    //Hacer una consulta a la base de datos por medio del ID del producto, que es generado automaticamente por MongoDB
    @Get('/:userID')
    async getProduct(@Res() res, @Param('userID') userID){
        const product = await this.productService.getProduct(userID);
        //Sintaxis para mostrar en caso que el producto no exista en la base de datos
        if (!product) throw new NotFoundException('User Does not Exist');
        return res.status(HttpStatus.OK).json(product);

    }

    //Borra un producto de la base de datos por medio del ID
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('userID') userID){
        const productDeleted = await this.productService.deleteProduct(userID);
        //Sintaxis para mostrar en caso que el producto a eliminar no exista en la base de datos
        if (!productDeleted) throw new NotFoundException('User Does not Exist');
        //Muestra por medio del protocolo Http con formato json la operación positiva del borrado
        return res.status(HttpStatus.OK).json({
            message: 'User Sucessfully Deleted',
            productDeleted
        })
    }
    //Actualizar un producto en la base de datos pro medio del ID por medio del decorador @Query
    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('userID') userID) {
        const updateProduct = await this.productService.updateProduct(userID, createProductDTO);
         //Sintaxis para mostrar en caso que el producto  no exista en la base de datos
        if (!updateProduct) throw new NotFoundException('User Does not Exist');
        //Muestra por medio del protocolo Http con formato json la operación positiva de la actualizacion
        return res.status(HttpStatus.OK).json({
            message: "User Updated Successfully!",
            updateProduct
        });
    }

}
