import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { cors } from './core/middleware/cors.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors);
    app.listen(5000).then(() => {
        new Logger('EasyPost').log('EasyPost API server has been started on http://localhost:5000');
    });
}

bootstrap();