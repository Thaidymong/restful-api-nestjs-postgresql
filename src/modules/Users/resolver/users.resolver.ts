import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/input';
import { CreateUserResponse } from '../dto/response';
import { UsersEntity } from '../entities/user-admin.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(
        @Body() input: CreateUserDto,
    ): Promise<CreateUserResponse> {
        return await this.usersService.createUser(input);
    }

    @Get()
    async getAllUsers(): Promise<UsersEntity[]> {
        return await this.usersService.findAllUser();
    }
}
