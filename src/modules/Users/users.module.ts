import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user-admin.entity';
import { UsersService } from './users.service';
import { UsersRepository } from './repositoties/users.repositoty';
import { UsersResolver } from './resolver/users.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    providers: [UsersService, UsersResolver, UsersRepository],
})
export class UsersModule {}
