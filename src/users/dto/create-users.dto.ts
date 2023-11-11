import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly password: string;
}
