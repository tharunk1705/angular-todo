import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList : Todo[];

  constructor(private todoService : TodoService) {
    this.todoList = todoService.getAllTodos();
   }

  ngOnInit() {
  }
  markCompleted(todo) {
    this.todoList = this.todoService.markAsDone(todo);
  }

  delete(todo) {
    this.todoList = this.todoService.deleteTodo(todo.id);
  }

  getPending() : number {
    return this.todoService.getPending();
  }


}
