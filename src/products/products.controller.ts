import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductsDto: CreateProductsDto) {
        console.log(createProductsDto);
        return this.productsService.create(createProductsDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Get()
    findAll() {
        //return this.productsService.findAll();
    }
}
