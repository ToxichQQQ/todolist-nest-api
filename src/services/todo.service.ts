import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async addNew(body): Promise<Todo> {
    const todo = new Todo();

    todo.title = body.title;

    await this.todoRepository.save(todo);

    return todo;
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findById(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async toggleById(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });

    todo.isDone = !todo.isDone;

    await this.todoRepository.save(todo);

    return todo;
  }

  async removeById(id: number): Promise<void> {
    await this.todoRepository.delete({ id });
  }
}
