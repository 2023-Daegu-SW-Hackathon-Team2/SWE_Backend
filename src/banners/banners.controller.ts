import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banners.dto';
import { BannersService } from './banners.service';

@Controller('banners')
export class BannersController {
    constructor(private readonly bannersService: BannersService) {}

    @Post()
    create(@Body() createBannerDto: CreateBannerDto) {
        console.log(createBannerDto);
        return this.bannersService.create(createBannerDto);
    }

    @Get('homepage_id/:homepage_id')
    findOne(@Param('homepage_id') homepage_id: number) {
        return this.bannersService.findOne(homepage_id);
    }
}
