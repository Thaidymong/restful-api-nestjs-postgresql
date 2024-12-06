export class CreateProductDto {
    name: string;
    description?: string;
    price: number;
    thumbnails?: string;
    categoryId: number;
}
