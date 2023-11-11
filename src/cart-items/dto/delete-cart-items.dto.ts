import {} from 'class-validator';

export class DeleteCartItemsDto {
    readonly created_user_id: string;
    readonly product_id: number;
}
