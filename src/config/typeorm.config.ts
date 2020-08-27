import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const inProd = process.env.NODE_ENV === 'production';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'sqlite',
	database: inProd ? process.env.DB_PATH : join(__dirname, '../../data.sqlite'),
	logging: true,
	entities: [join(__dirname, '../**/*.entity.js')],
	synchronize: !inProd,
};
