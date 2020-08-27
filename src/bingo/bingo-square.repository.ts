import { EntityRepository, Repository } from 'typeorm';
import { BingoSquare } from './bingo-square.entity';

@EntityRepository(BingoSquare)
export class BingoSquareRepository extends Repository<BingoSquare> {}
