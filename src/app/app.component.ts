import { Component } from "@angular/core";
import { Todo } from "./todo";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Todos Today";
  constructor(private todoService : TodoService) {}
  getPending() : number {
    return this.todoService.getPending();
  }
  getLength(){
    return this.todoService.length();
  }
}
