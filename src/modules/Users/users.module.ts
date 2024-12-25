import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user-admin.entity';
import { UsersService } from './users.service';
import { UsersController } from './resolver/users.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UsersController], // Register the controller correctly
    providers: [UsersService],
})
export class UsersModule {}
