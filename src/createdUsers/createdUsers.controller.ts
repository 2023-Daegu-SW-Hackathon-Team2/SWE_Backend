import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCreatedUsersDto } from './dto/create-createdUsers.dto';
import { CreatedUsersService } from './createdUsers.service';
import { CreatedUsers } from './createdUsers.entity';

@Controller('createdUsers')
export class CreatedUsersController {
    constructor(private readonly createdUsersService: CreatedUsersService) {}

    @Post()
    create(@Body() createdUsersDto: CreateCreatedUsersDto) {
        console.log(createdUsersDto);
        return this.createdUsersService.create(createdUsersDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: string) {
        console.log('heloo');
        //return this.usersService.findOne(id);
    }

    @Get()
    findAll() {
        console.log('fetching data');
        //return this.usersService.findAll();
    }
}
