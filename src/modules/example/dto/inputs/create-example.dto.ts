import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateExampleDto {
    @IsString({ message: 'title must be string' })
    @IsNotEmpty({ message: 'title must not be empty' })
    example_title: string;

    @IsString({ message: 'description must be string' })
    @IsNotEmpty({ message: 'description must not be empty' })
    example_desc: string;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;
}
