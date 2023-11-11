import { IsString, IsEmail, IsNumber, IsArray } from 'class-validator';

export class CreateHomepagesDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly logo: string;

    @IsArray()
    @IsString({ each: true })
    readonly new_item: string[];

    @IsArray()
    @IsString({ each: true })
    readonly best_item: string[];

    @IsArray()
    @IsString({ each: true })
    readonly banners: string[];
}
