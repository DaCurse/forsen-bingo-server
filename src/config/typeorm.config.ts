import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const prodDbPath = '/var/forsen-bingo/data.sqlite';
const inProd = process.env.NODE_ENV === 'production';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'sqlite',
	database: inProd ? prodDbPath : join(__dirname, '../../data.sqlite'),
	logging: true,
	entities: [join(__dirname, '../**/*.entity.js')],
	synchronize: !inProd,
};
