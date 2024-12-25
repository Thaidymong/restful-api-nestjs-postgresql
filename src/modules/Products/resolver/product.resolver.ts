import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ProductService } from '../product.service';
import { CreateProductDto, UpdateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Put(':id')
    async updateProduct(
        @Param('id') id: number,
        @Body() updateProductDto: UpdateProductDto,
    ): Promise<ProductEntity> {
        return this.productService.update(id, updateProductDto);
    }

    @Get()
    getAllProducts() {
        return this.productService.findAll();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<ProductEntity> {
        return this.productService.findById(id);
    }

    @Delete(':id')
    async removeProduct(@Param('id') id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
