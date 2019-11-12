import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from "./interfaces/product.interface";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO  ) {
        //console.log(createProductDTO)
        const product = await this.productService.createProduct(createProductDTO);
        //console.log(product);
        return res.status(HttpStatus.OK).json ({
            message: 'Product Created Succesfully',
            product
        });

    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'List of Products in System',
            products
        });
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Product Does not Exist');
        return res.status(HttpStatus.OK).json(product);

    }


    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID){
        const productDeleted = await this.productService.deleteProduct(productID);
        if (!productDeleted) throw new NotFoundException('Product Does not Exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product Sucessfully Deleted',
            productDeleted
        })
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updateProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updateProduct) throw new NotFoundException('Product Does not Exist');
        return res.status(HttpStatus.OK).json({
            message: "Product Updated Successfully!",
            updateProduct
        });
    }

}
