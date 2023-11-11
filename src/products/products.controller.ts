import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
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

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() products: Products) {
        return this.productsService.update(id, products);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }
}
