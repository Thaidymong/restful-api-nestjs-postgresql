import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    setGlobalSettings(app);
    await startServer(app);
}

function setGlobalSettings(app) {
    app.enableCors(); // Enable CORS if needed
    app.useGlobalPipes(new ValidationPipe()); // Apply global validation
    // Add other global settings if necessary
}

async function startServer(app) {
    const port = process.env.PORT || 8088;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
