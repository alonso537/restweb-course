import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface GetTodoUseCases {
    execute(id: number): Promise<TodoEntity>
}


export class GetTodo implements GetTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    public async execute(id: number): Promise<TodoEntity> {
        const todo = await this.todoRepository.findById(id);

        return todo;
    }
}