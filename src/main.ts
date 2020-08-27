import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { httpsOptions } from './config/https.config';
import { rateLimitConfig } from './config/rate-limit.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		httpsOptions,
	});
	app.setGlobalPrefix('/api');
	app.enableCors();
	app.use(rateLimit(rateLimitConfig));
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
