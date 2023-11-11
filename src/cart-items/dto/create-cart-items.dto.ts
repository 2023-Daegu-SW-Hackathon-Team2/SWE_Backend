import { IsNumber, IsString } from 'class-validator';

export class CreateCartItemsDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly created_user_id: string;

    @IsNumber()
    readonly product_id: number;

    @IsNumber()
    readonly quantity: number;
}
