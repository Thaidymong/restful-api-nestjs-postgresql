import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessDirectoryCategoryEntity } from './entities/business-directory-category.entity';
import { BusinessDirectoryCategoryService } from './business-directory-category.service';
import { BusinessDirectoryCategoryResolver } from './business-directory-category.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([BusinessDirectoryCategoryEntity])],
    controllers: [BusinessDirectoryCategoryResolver],
    providers: [BusinessDirectoryCategoryService],
})
export class BusinessDirectoryCategoryModule {}
