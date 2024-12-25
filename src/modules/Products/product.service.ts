import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';
import { CategoryEntity } from 'src/modules/Category/entities/category.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
    ) {}

    async create(createProductDto: CreateProductDto) {
        const category = await this.categoryRepository.findOne({
            where: { id: createProductDto.categoryId },
        });
        if (!category) {
            throw new Error('Category not found');
        }
        const product = this.productRepository.create({
            ...createProductDto,
            category,
        });
        return await this.productRepository.save(product);
    }

    async findAll() {
        return await this.productRepository.find({ relations: ['category'] });
    }

    async findById(id: number): Promise<ProductEntity> {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['category'],
        });
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async update(
        id: number,
        updateProductDto: UpdateProductDto,
    ): Promise<ProductEntity> {
        const product = await this.findById(id);

        if (updateProductDto.categoryId) {
            const category = await this.categoryRepository.findOne({
                where: { id: updateProductDto.categoryId },
            });
            if (!category) {
                throw new NotFoundException(
                    `Category with ID ${updateProductDto.categoryId} not found`,
                );
            }
            product.category = category;
        }

        Object.assign(product, updateProductDto);
        return this.productRepository.save(product);
    }

    async remove(id: number): Promise<void> {
        const product = await this.findById(id);
        await this.productRepository.remove(product);
    }
}
