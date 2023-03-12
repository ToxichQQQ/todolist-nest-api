import { Module } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoController } from '../controllers/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { ApiProperty } from '@nestjs/swagger';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])],
  exports: [TypeOrmModule],
})
export class TodoModule {}
