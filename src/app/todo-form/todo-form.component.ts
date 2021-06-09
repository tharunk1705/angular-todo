import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Todo } from "./../todo";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent implements OnInit {
  todoValue: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.todoValue !== "") {
      const todo: Todo = {
        id: Date.now(),
        isDone: false,
        todoValue: this.todoValue,
        date: new Date(),
      };
      this.todoValue = "";
      this.todoService.addTodo(todo);
    }
  }
}
