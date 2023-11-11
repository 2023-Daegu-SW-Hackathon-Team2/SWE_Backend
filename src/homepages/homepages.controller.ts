import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { CreateHomepagesDto } from './dto/create-homepages.dto';
import { HomepagesService } from './homepages.service';
import { Homepages } from './homepages.entity';

@Controller('homepages')
export class HomepagesController {
    constructor(private readonly homepagesService: HomepagesService) {}

    @Post()
    create(@Body() createHomepagesDto: CreateHomepagesDto) {
        return this.homepagesService.create(createHomepagesDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: number) {
        return this.homepagesService.findOne(id);
    }

    @Put('id/:id')
    update(@Param('id') id: number, @Body() homepages: Homepages) {
        return this.homepagesService.update(id, homepages);
    }
}
