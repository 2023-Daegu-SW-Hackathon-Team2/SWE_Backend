import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateProductsDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly img: string;

    @IsNumber()
    readonly price: number;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly category: number;
}
