import {  UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface UpdateTodoUseCases {
    execute(dto: UpdateTodoDto): Promise<TodoEntity>
}


export class UpdateTodo implements UpdateTodoUseCases {
    constructor(private readonly todoRepository: TodoRepository) {}

    public async execute(dto: UpdateTodoDto): Promise<TodoEntity> {
        const todo = await this.todoRepository.updateById(dto);

        return todo;
    }
}