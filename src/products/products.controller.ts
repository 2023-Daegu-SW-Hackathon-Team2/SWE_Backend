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
        //return this.productsService.create(CreateProductsDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: string) {
        console.log('heloo');
        //return this.productsService.findOne(id);
    }

    @Get()
    findAll() {
        console.log('fetching data');
        //return this.productsService.findAll();
    }
}
