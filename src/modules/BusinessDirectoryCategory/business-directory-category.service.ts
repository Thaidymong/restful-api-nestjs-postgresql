import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessDirectoryCategoryEntity } from './entities/business-directory-category.entity';
import {
    CreateBuinessDirectoryCategoryDto,
    UpdateBusinessDirectoryCategoryDto,
} from './dto/create-business-directory-category.dto';

@Injectable()
export class BusinessDirectoryCategoryService {
    constructor(
        @InjectRepository(BusinessDirectoryCategoryEntity)
        private readonly businessDirectoryCategoryRepository: Repository<BusinessDirectoryCategoryEntity>,
    ) {}
    async create(
        createBuinessDirectoryCategoryDto: CreateBuinessDirectoryCategoryDto,
    ) {
        const isCreated = this.businessDirectoryCategoryRepository.create(
            createBuinessDirectoryCategoryDto,
        );
        return await this.businessDirectoryCategoryRepository.save(isCreated);
    }

    async findAll() {
        return await this.businessDirectoryCategoryRepository.find();
    }

    async getBusinessDirectoryCategoryByID(
        id: number,
    ): Promise<BusinessDirectoryCategoryEntity> {
        const category = await this.businessDirectoryCategoryRepository.findOne(
            {
                where: { id },
                // relations: ['businesses'], // Include the related businesses
            },
        );

        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }

        return category;
    }

    async updateBusinessDirectoryCategoryByID(
        id: number,
        updateDto: UpdateBusinessDirectoryCategoryDto,
    ): Promise<BusinessDirectoryCategoryEntity> {
        const category = await this.businessDirectoryCategoryRepository.findOne(
            { where: { id } },
        );

        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }

        // Merge updates
        const updatedCategory = this.businessDirectoryCategoryRepository.merge(
            category,
            updateDto,
        );

        // Save the updated entity
        return await this.businessDirectoryCategoryRepository.save(
            updatedCategory,
        );
    }

    async removeBusinessDirectoryCategoryByID(id: number): Promise<void> {
        const category = await this.businessDirectoryCategoryRepository.findOne(
            {
                where: { id },
            },
        );

        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }

        await this.businessDirectoryCategoryRepository.remove(category);
    }
}
