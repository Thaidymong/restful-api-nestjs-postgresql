import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';
import { ExampleRepository } from './repositories/example.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ExampleEntity])],
    providers: [ExampleService, ExampleRepository, ExampleRepository],
})
export class ExampleModule {}
