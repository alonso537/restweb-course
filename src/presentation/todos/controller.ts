import { Request, Response } from "express"

const todos = [
    {id:1, text: 'But milk', createdAt: new Date()},
    {id:2, text: 'But bread', createdAt: new Date()},
    {id:3, text: 'But butter', createdAt: new Date()}
]


export class TodosController {

    // DI
    constructor() {

    }

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos)
    }

    public getTodosById = (req: Request, res: Response) => {
        const id = +req.params.id

        const todo = todos.find(todo => todo.id === id)

        todo ? res.json(todo) : res.status(404).json({error: `Todo with id ${id} not found`})
    }

    public createTodo = (req: Request, res: Response) => {
        const {text} = req.body;

        if(!text) {
            return res.status(400).json({error: `Text property is required`})
        }

        const newTodo = {
            id: todos.length + 1,
            text,
            createdAt: new Date()
        }

        todos.push(newTodo)

        res.status(201).json(newTodo)


    }
}