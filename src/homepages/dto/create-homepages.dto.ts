import { IsString, IsEmail } from 'class-validator';

export class CreateHomepagesDto {
    @IsString()
    readonly id: number;

    @IsString()
    readonly user_id: string;

    @IsString()
    readonly title: string;

    @IsString()
    readonly logo: string;
}
