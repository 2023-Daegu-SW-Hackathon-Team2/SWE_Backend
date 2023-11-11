import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateBannerDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly homepage_id: number;

    @IsArray()
    @IsString({ each: true })
    readonly banner_data: Array<string>;
}
