import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Todo main operations')
@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  @ApiOperation({ summary: 'Create new todo' })
  @Post()
  create(@Body() title: string) {
    return this.TodoService.addNew(title);
  }

  @ApiOperation({ summary: 'Get all todos' })
  @Get('/all')
  getAll() {
    return this.TodoService.findAll();
  }

  @ApiOperation({ summary: 'Get todo by ID' })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.TodoService.findById(id);
  }

  @ApiOperation({ summary: 'Delete todo by ID' })
  @Delete('/:id')
  deleteTodo(@Param('id') id: number) {
    return this.TodoService.removeById(id);
  }

  @ApiOperation({ summary: 'Update todo by ID' })
  @Put('/:id')
  toggleTodo(@Param('id') id: number) {
    return this.TodoService.toggleById(id);
  }
}
