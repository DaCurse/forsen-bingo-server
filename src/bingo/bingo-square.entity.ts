import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BingoSquare extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	line: string;
	@Column({ default: 0 })
	clickCount: number;
}
