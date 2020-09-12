import { HttpException, HttpStatus } from '@nestjs/common';
import * as rateLimit from 'express-rate-limit';

const message = new HttpException(
	'Too Many Requests',
	HttpStatus.TOO_MANY_REQUESTS,
);

export const rateLimitConfig = {
	short: rateLimit({
		windowMs: 1000,
		max: 5,
		message,
	}),
	long: rateLimit({
		windowMs: 1000 * 60,
		max: 30,
		message,
	}),
};
