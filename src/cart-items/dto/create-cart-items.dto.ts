import { IsNumber } from 'class-validator';

export class CreateCartItemsDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly cart_id: number;

    @IsNumber()
    readonly product_id: number;

    @IsNumber()
    readonly quantity: number;
}
