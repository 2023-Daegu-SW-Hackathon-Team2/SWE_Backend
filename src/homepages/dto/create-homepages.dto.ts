import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateHomepagesDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly logo: string;
}
