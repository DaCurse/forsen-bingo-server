import { HttpException, HttpStatus } from '@nestjs/common';
import rateLimit from 'express-rate-limit';

const message = new HttpException(
  'Too Many Requests',
  HttpStatus.TOO_MANY_REQUESTS
);

export const rateLimitConfig: rateLimit.Options = {
  windowMs: 1000 * 60,
  max: 100,
  message: message as any,
  skipFailedRequests: true,
};
