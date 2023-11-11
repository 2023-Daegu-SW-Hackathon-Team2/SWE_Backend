import { IsString, IsEmail } from 'class-validator';

export class CreateProductsDto {
    @IsString()
    readonly id: number;

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly img: string;

    @IsString()
    readonly price: number;

    @IsString()
    readonly description: string;
}
