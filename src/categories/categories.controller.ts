import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Param,
    Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriesService.findOne(id);
    }

    @Get('homepage_id/:homepage_id')
    findCategories(@Param('homepage_id') homepage_id: number) {
        return this.categoriesService.findCategories(homepage_id);
    }

    @Post()
    create(@Body() category: CreateCategoriesDto) {
        return this.categoriesService.create(category);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() category: CreateCategoriesDto) {
        return this.categoriesService.update(id, category);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.categoriesService.delete(id);
    }
}
