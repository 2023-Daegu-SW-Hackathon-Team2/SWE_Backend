import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateBoardsDto {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly homepage_id: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly content: string;

    @IsDate()
    readonly created_time: Date;

    @IsString()
    readonly created_user_id: string;
}
