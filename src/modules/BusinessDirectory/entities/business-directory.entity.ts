import { BusinessDirectoryCategoryEntity } from 'src/modules/BusinessDirectoryCategory/entities/business-directory-category.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity({ name: 'business-directory' })
export class BusinessDirectoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name_kh: string;

    @Column({ unique: true, nullable: true })
    name_en: string;

    @Column({ type: 'text', nullable: true })
    location: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'varchar', nullable: true })
    thumbnails: string;

    @ManyToOne(
        () => BusinessDirectoryCategoryEntity,
        (category) => category.products,
        { nullable: false },
    )
    @JoinColumn({ name: 'categoryId' })
    category: BusinessDirectoryCategoryEntity;
}
