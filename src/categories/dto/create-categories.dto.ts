import { IsNumber, IsString } from 'class-validator';

export class CreateCategoriesDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly homepage_id: number;

    @IsString()
    readonly category_name: string;
}
