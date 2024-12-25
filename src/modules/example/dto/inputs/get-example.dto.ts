import { IsNotEmpty, IsString } from 'class-validator';

export class GetExampleDto {
    @IsString()
    @IsNotEmpty()
    example_title: string;
}
