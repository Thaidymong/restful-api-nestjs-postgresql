import { Controller, Get } from '@nestjs/common';
import { ExampleService } from '../example.service';
import { AllExamplesResponse } from '../dto/response/example.response.dto';

@Controller('examples')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    @Get()
    async getAllExamples(): Promise<AllExamplesResponse> {
        return await this.exampleService.getAllExamples();
    }
}
