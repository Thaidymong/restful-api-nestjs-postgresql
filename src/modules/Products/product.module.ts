import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './resolver/product.resolver';
import { ProductService } from './product.service';
import { CategoryEntity } from '../Category/entities/category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity, CategoryEntity])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
