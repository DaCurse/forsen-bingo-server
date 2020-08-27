import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BingoModule } from './bingo/bingo.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
	imports: [TypeOrmModule.forRoot(typeOrmConfig), BingoModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
