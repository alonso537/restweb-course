import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

const todos = [
  { id: 1, text: "But milk", createdAt: new Date() },
  { id: 2, text: "But bread", createdAt: new Date() },
  { id: 3, text: "But butter", createdAt: new Date() },
];

export class TodosController {
  // DI
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };

  public getTodosById = (req: Request, res: Response) => {
    const id = +req.params.id;

    const todo = todos.find((todo) => todo.id === id);

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `Todo with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: `Text property is required` });
    }

    const todo = await prisma.todo.create({
      data: {
        text
      }
    });

    
    

    res.status(201).json(todo);
  };

  public updateTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });

    const todo = todos.find((todo) => todo.id === id);
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const { text, completedAt } = req.body;
    // if(!text) return res.status(400).json({error: `Text property is required`})

    todo.text = text || todo.text;

    completedAt === "null"
      ? (todo.createdAt = todo.createdAt)
      : (todo.createdAt = new Date());

    //! OJO, reference
    // todos.forEach((todo, index) => {
    //     if(todo.id === id) {
    //         todos[index] = todo
    //     }
    // })

    res.json(todo);
  };

  public deleteTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });

    const todo = todos.find((todo) => todo.id === id);
    if(!todo) return res.status(404).json({error: `Todo with id ${id} not found`})

    todos.splice(todos.indexOf(todo), 1)

    res.json(todo)

  }
}
