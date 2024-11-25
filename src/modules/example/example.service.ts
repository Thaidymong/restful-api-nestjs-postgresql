import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AllExamplesResponse } from './dto/response/example.response.dto';
import { ExampleRepository } from './repositories/example.repository';
import { ERROR_MESSAGES } from 'src/common/errors';

@Injectable()
export class ExampleService {
    constructor(private readonly exampleRepository: ExampleRepository) {}

    async getAllExamples(): Promise<AllExamplesResponse> {
        try {
            const data = await this.exampleRepository.find();
            return {
                statusCode: HttpStatus.OK,
                message: 'OK',
                data: data,
            };
        } catch (error) {
            throw new HttpException(
                ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
