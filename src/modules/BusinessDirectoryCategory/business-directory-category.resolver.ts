import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { BusinessDirectoryCategoryService } from './business-directory-category.service';
import {
    CreateBuinessDirectoryCategoryDto,
    UpdateBusinessDirectoryCategoryDto,
} from './dto/create-business-directory-category.dto';
import { BusinessDirectoryCategoryEntity } from './entities/business-directory-category.entity';

@Controller('business-directoy-category')
export class BusinessDirectoryCategoryResolver {
    constructor(
        private readonly businessDirectoryCategoryService: BusinessDirectoryCategoryService,
    ) {}

    @Post()
    createBusinessDirectoryCategory(
        @Body()
        createBuinessDirectoryCategoryDto: CreateBuinessDirectoryCategoryDto,
    ) {
        return this.businessDirectoryCategoryService.create(
            createBuinessDirectoryCategoryDto,
        );
    }

    @Get()
    findAllBusinessDirectoryCategory() {
        return this.businessDirectoryCategoryService.findAll();
    }

    @Get(':id')
    async getBusinessDirectoryCategoryByID(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<BusinessDirectoryCategoryEntity> {
        return await this.businessDirectoryCategoryService.getBusinessDirectoryCategoryByID(
            id,
        );
    }

    @Put(':id')
    async updateBusinessDirectoryCategoryByID(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateBusinessDirectoryCategoryDto,
    ): Promise<BusinessDirectoryCategoryEntity> {
        return await this.businessDirectoryCategoryService.updateBusinessDirectoryCategoryByID(
            id,
            updateDto,
        );
    }

    @Delete(':id')
    @HttpCode(204) // Returns HTTP status 204 (No Content) on success
    async removeBusinessDirectoryCategoryByID(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        await this.businessDirectoryCategoryService.removeBusinessDirectoryCategoryByID(
            id,
        );
    }
}
