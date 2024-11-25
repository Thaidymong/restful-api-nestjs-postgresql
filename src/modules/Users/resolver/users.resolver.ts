import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/input';
import { CreateUserResponse } from '../dto/response';

@Controller('users')
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(
        @Body() input: CreateUserDto,
    ): Promise<CreateUserResponse> {
        return await this.usersService.createUser(input);
    }
}
