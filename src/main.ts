import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { morganMiddleware } from './config/morgan.config';
import { rateLimitConfig } from './config/rate-limit.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(helmet());
  app.enableCors();
  app.use(rateLimit(rateLimitConfig));
  app.use(morganMiddleware);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
