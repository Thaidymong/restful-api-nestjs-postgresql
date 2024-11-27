import { ProductEntity } from 'src/modules/Products/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @OneToMany(() => ProductEntity, (product) => product.category)
    products: ProductEntity[];
}
