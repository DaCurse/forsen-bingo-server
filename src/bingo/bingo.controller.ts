import {
  Body,
  Controller,
  Get,
  HttpCode,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BingoSquare } from './bingo-square.entity';
import { BingoService } from './bingo.service';

@Controller('bingo')
export class BingoController {
  constructor(private readonly bingoService: BingoService) {}

  @Get('squares')
  getSquares(): Promise<BingoSquare[]> {
    return this.bingoService.getSquares();
  }

  @Post('activate')
  @HttpCode(204)
  async activateSquare(
    @Body('id', ParseIntPipe) squareId: number
  ): Promise<void> {
    await this.bingoService.activateSquare(squareId);
  }

  @Post('deactivate')
  @HttpCode(204)
  async deactivateSquare(
    @Body('id', ParseIntPipe) squareId: number
  ): Promise<void> {
    await this.bingoService.deactivateSquare(squareId);
  }
}
