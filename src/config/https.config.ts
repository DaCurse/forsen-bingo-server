import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { readFileSync } from 'fs';

export const httpsOptions: HttpsOptions =
	process.env.NODE_ENV === 'production'
		? {
				key: readFileSync(process.env.SSL_KEY),
				cert: readFileSync(process.env.SSL_CERT),
		  }
		: {};
