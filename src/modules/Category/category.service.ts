import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    CreateCategoryDto,
    UpdateCategoryDto,
} from './dto/create-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
    ) {}

    async create(createCategoryDto: CreateCategoryDto) {
        const category = this.categoryRepository.create(createCategoryDto);
        return await this.categoryRepository.save(category);
    }

    async findAll() {
        return await this.categoryRepository.find();
    }

    async update(
        id: number,
        updateCategoryDto: UpdateCategoryDto,
    ): Promise<CategoryEntity> {
        // 1) Find the existing category
        const category = await this.categoryRepository.findOne({
            where: { id },
        });
        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found.`);
        }

        // 2) Merge the new data into the existing category
        Object.assign(category, updateCategoryDto);

        // 3) Save the updated category
        return this.categoryRepository.save(category);
    }

    async remove(id: number): Promise<void> {
        const category = await this.categoryRepository.findOne({
            where: { id },
        });
        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found.`);
        }

        await this.categoryRepository.remove(category);
    }
}
