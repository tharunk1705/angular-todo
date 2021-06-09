import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[] = [];
  pending : number = 0;
  constructor() { }

  addTodo(todo) : void {
    this.todos.push(todo);
  }
  markAsDone(todo) : Todo[] {
    let todoIndex = this.todos.findIndex(t => t.id == todo.id);
    this.todos[todoIndex].isDone = true;
    return this.todos;
  }

  deleteTodo(id) : Todo[] {
    this.todos = this.todos.filter((todo) => todo.id != id);
    return this.todos;
  }

  getAllTodos() : Todo[] {
    return this.todos;
  }

  getPending() : number {
    let count = 0;
    this.todos.forEach((todo) => {
      if(!todo.isDone) {
        count++;
      }
    });
    this.pending = count;
    return this.pending;
  }

  length() : number{
    return this.todos.length;
  }

}
