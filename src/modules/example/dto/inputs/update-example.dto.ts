import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateExampleDto {
    @IsString()
    @IsNotEmpty()
    example_title: string;

    @IsString()
    @IsNotEmpty()
    example_desc: string;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;
}
