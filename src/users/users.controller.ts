import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return this.usersService.create(createUserDto);
    }

    @Get('id/:id')
    findOne(@Param('id') id: string) {
        console.log('heloo');
        return this.usersService.findOne(id);
    }

    @Get()
    findAll() {
        console.log('fetching data');
        return this.usersService.findAll();
    }
}
