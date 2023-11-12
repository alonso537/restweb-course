import { CreateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface DeleteTodoUseCases {
    execute(id: number): Promise<TodoEntity>
}


export class DeleteTodo implements DeleteTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    public async execute(id: number): Promise<TodoEntity> {
        const todo = await this.todoRepository.deleteById(id);

        return todo;
    }
}