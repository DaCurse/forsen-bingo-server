import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { httpsOptions } from './config/https.config';
import { morganMiddleware } from './config/morgan.config';
import { rateLimitConfig } from './config/rate-limit.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		httpsOptions,
	});
	app.setGlobalPrefix('/api');
	app.enableCors();
	app.use(rateLimitConfig.short);
	app.use(rateLimitConfig.long);
	app.use(morganMiddleware);

	await app.listen(process.env.PORT || 3000);
}
bootstrap();
