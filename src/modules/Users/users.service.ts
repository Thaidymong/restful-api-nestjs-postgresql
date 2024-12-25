import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/user-admin.entity';
import { CreateUserDto } from './dto/input';
import { CreateUserResponse } from './dto/response';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>,
    ) {}

    async createUser(input: CreateUserDto): Promise<CreateUserResponse> {
        const { username, password, firstname, lastname } = input;

        // Check if user already exists
        const existingUser = await this.userRepository.findOne({
            where: { username },
        });
        if (existingUser) {
            throw new BadRequestException('Username already exists!');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const newUser = this.userRepository.create({
            username,
            password: hashedPassword,
            firstname,
            lastname,
        });

        // Save the new user
        const savedUser = await this.userRepository.save(newUser);

        return { data: savedUser };
    }

    async findAllUser(): Promise<UsersEntity[]> {
        return await this.userRepository.find();
    }
}
