import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { CategoryService } from '../category.service';
import {
    CreateCategoryDto,
    UpdateCategoryDto,
} from '../dto/create-category.dto';
import { CategoryEntity } from '../entities/category.entity';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    findAllCategory() {
        return this.categoryService.findAll();
    }

    @Put(':id')
    async updateCategory(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ): Promise<CategoryEntity> {
        return this.categoryService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    async removeProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.categoryService.remove(id);
    }
}
