import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/user-admin.entity';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly repository: Repository<UsersEntity>,
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
