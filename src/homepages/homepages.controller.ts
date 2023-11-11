import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateHomepagesDto } from './dto/create-homepages.dto';
import { HomepagesService } from './homepages.service';
import { Homepages } from './homepages.entity';

@Controller('homepages')
export class HomepagesController {
    constructor(private readonly homepagesService: HomepagesService) {}

    @Post()
    create(@Body() createHomepagesDto: CreateHomepagesDto) {
        console.log(CreateHomepagesDto);
        //return this.HomepagesService.create(CreateHomepagesDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: string) {
        console.log('heloo');
        //return this.HomepagesService.findOne(id);
    }

    @Get()
    findAll() {
        console.log('fetching data');
        //return this.HomepagesService.findAll();
    }
}
