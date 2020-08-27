import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BingoSquareRepository } from './bingo-square.repository';
import { BingoController } from './bingo.controller';
import { BingoService } from './bingo.service';

@Module({
	imports: [TypeOrmModule.forFeature([BingoSquareRepository])],
	controllers: [BingoController],
	providers: [BingoService],
})
export class BingoModule {}
