import { BusinessDirectoryEntity } from 'src/modules/BusinessDirectory/entities/business-directory.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'business-directoy-category' })
export class BusinessDirectoryCategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name_kh: string;

    @Column({ unique: true })
    name_en: string;

    @Column({ type: 'text', nullable: true })
    thumbnail: string;

    @OneToMany(() => BusinessDirectoryEntity, (product) => product.category, {
        cascade: true,
    })
    products: BusinessDirectoryEntity[];
}
