import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateBannerDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly homepage_id: number;

    @IsString()
    readonly banner_data: string;
}
