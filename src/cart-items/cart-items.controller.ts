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
import { UpdateCartItemsDto } from './dto/update-cart-items.dto';

@Controller('cart-items')
export class CartItemsController {
    constructor(private readonly cartItemsService: CartItemsService) {}

    @Get('cart_id/:cart_id')
    findOne(@Param('cart_id') cart_id: number) {
        return this.cartItemsService.findOne(cart_id);
    }

    @Post()
    create(@Body() createCartItemsDto: CreateCartItemsDto) {
        return this.cartItemsService.create(createCartItemsDto);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateCartItemsDto: UpdateCartItemsDto,
    ) {
        return this.cartItemsService.update(id, updateCartItemsDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.cartItemsService.delete(id);
    }
}
