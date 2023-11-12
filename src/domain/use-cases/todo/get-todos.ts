import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface GetAllTodoUseCases {
    execute(): Promise<TodoEntity[]>
}


export class GetTodos implements GetAllTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    public async execute(): Promise<TodoEntity[]> {
        const todos = await this.todoRepository.getAll();

        return todos;
    }
}