import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseInterceptors,
    UploadedFile,
    UploadedFiles,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsService } from './products.service';
import { Products } from './products.entity';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductsDto: CreateProductsDto) {
        console.log(createProductsDto);
        return this.productsService.create(createProductsDto);
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        return this.productsService.uploadImages(files);
    }

    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Get('/category/:category')
    findCategory(@Param('category') category: number) {
        return this.productsService.findCategory(category);
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
