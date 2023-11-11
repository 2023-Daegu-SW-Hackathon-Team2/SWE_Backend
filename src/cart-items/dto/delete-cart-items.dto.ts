import {} from 'class-validator';

export class DeleteCartItemsDto {
    readonly cart_id: number;
    readonly product_id: number;
}
