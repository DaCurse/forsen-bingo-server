import { Injectable, NotFoundException } from '@nestjs/common';
import { BingoSquare } from './bingo-square.entity';
import { BingoSquareRepository } from './bingo-square.repository';

const SQUARE_LIMIT = 80;

@Injectable()
export class BingoService {
	constructor(private readonly bingoSquareRepository: BingoSquareRepository) {}

	async getSquares(): Promise<BingoSquare[]> {
		const squares = await this.bingoSquareRepository
			.createQueryBuilder('square')
			.limit(SQUARE_LIMIT)
			.orderBy('RANDOM()')
			.getMany();

		return squares;
	}

	private async getSquareById(squareId: number): Promise<BingoSquare> {
		const found = await this.bingoSquareRepository.findOne(squareId);

		if (!found) {
			throw new NotFoundException(`Square with ID ${squareId} not found.`);
		}

		return found;
	}

	async activateSquare(squareId: number): Promise<void> {
		const square = await this.getSquareById(squareId);
		if (square.freeSquare) return;

		square.clickCount++;
		await square.save();
	}

	async deactivateSquare(squareId: number): Promise<void> {
		const square = await this.getSquareById(squareId);
		if (square.freeSquare) return;

		if (square.clickCount > 0) {
			square.clickCount--;
			await square.save();
		}
	}
}
