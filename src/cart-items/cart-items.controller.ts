import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Param,
    Delete,
} from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CreateCartItemsDto } from './dto/create-cart-items.dto';

@Controller('cart-items')
export class CartItemsController {
    constructor(private readonly cartItemsService: CartItemsService) {}

    @Get()
    findAll() {
        return this.cartItemsService.findAll();
    }

    @Post()
    create(@Body() createCartItemsDto: CreateCartItemsDto) {
        return this.cartItemsService.create(createCartItemsDto);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() CreateCartItemsDto: CreateCartItemsDto,
    ) {
        return this.cartItemsService.update(id, CreateCartItemsDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.cartItemsService.delete(id);
    }
}
