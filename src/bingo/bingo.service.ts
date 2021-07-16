import { Injectable } from '@nestjs/common';
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

  async activateSquare(squareId: number): Promise<void> {
    await this.bingoSquareRepository
      .createQueryBuilder()
      .update(BingoSquare)
      .set({ clickCount: () => 'clickCount + 1' })
      .where('id = :id', { id: squareId })
      .execute();
  }

  async deactivateSquare(squareId: number): Promise<void> {
    await this.bingoSquareRepository
      .createQueryBuilder()
      .update(BingoSquare)
      .set({ clickCount: () => 'clickCount - 1' })
      .where(['id = :id', 'clickCount > :zero'], { id: squareId, zero: 0 })
      .execute();
  }
}
