import { HttpException, HttpStatus } from '@nestjs/common';

export const rateLimitConfig = {
	windowMs: 1000,
	max: 5,
	message: new HttpException('Too Many Requests', HttpStatus.TOO_MANY_REQUESTS),
};
