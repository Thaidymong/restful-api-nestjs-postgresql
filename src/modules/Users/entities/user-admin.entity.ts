import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column({ nullable: true })
    password: string;
}
