import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from './boards.entity';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) {}

    @Get()
    async findAll(): Promise<Boards[]> {
        return this.boardsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Boards> {
        return this.boardsService.findOne(id);
    }

    @Post()
    async create(@Body() board: Boards): Promise<Boards> {
        return this.boardsService.create(board);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() board: Boards,
    ): Promise<Boards> {
        return this.boardsService.update(id, board);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.boardsService.remove(id);
    }
}
