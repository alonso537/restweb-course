import { CreateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface CreateTodoUseCases {
    execute(dto: CreateTodoDto): Promise<TodoEntity>
}


export class CreateTodo implements CreateTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    public async execute(dto: CreateTodoDto): Promise<TodoEntity> {
        const todo = await this.todoRepository.create(dto);

        return todo;
    }
}