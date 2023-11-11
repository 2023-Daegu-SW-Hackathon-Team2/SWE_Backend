import { IsString, IsEmail } from 'class-validator';

export class CreateCreatedUsersDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly pw: string;

    @IsString()
    readonly user_id: string;
}
