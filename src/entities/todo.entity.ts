import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Todo {
  @ApiProperty({ example: 1, description: 'Todo unique id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Buy new car', description: 'Todo title' })
  @Column()
  title: string;

  @ApiProperty({ example: false, description: 'Todo status' })
  @Column({ default: false })
  isDone: boolean;
}
