import { Example } from './example-schema.dto';

export class AllExamplesResponse {
    statusCode?: number;
    message?: string;
    data?: Example[];
}

export class ExampleResponse {
    statusCode?: number;
    message?: string;
    data?: Example;
}

export class CreateExampleResponse {
    statusCode?: number;
    message?: string;
    data?: Example;
}

export class UpdateExampleResponse {
    statusCode?: number;
    message?: string;
    data?: Example;
}

export class DeleteExampleResponse {
    statusCode?: number;
    message?: string;
}
