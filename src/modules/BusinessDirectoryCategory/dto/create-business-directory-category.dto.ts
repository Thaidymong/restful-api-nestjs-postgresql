import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBuinessDirectoryCategoryDto {
    name_kh: string;
    name_en: string;
    thumbnail: string;
}

export class UpdateBusinessDirectoryCategoryDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name_kh?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name_en?: string;

    @IsOptional()
    @IsString()
    @IsUrl()
    thumbnail?: string;
}
