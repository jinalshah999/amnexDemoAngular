import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  arr: string[] = ["jinal", "shah", "dhruti"];
  todolist: Todo[] = [
    new Todo("1", "push your code to github", "pending"),
    new Todo("2", "email yo your manager", "done")
  ];
  flag: boolean = false;
  Id: string = "";
  Title: string = "";
  Status: string = "";
  str1: string = "jinal";
  ontodoDelete(item: Todo): void {
    this.todolist.splice(this.todolist.indexOf(item), 1);
  }
  onAddTodo(): void {
    this.todolist.push(new Todo(this.Id, this.Title, this.Status));
    this.Id = "";
    this.str1 = "";
  }
  ontodoupdate(item: Todo): void {
    if (item.Status == "done") {
      item.Status = "pending";
    } else {
      item.Status = "done";
    }
  }
  onCancelTodo() {
    this.flag = false;
  }
  onAddForm(): void {
    this.flag = true;
  }
  constructor() {}

  ngOnInit() {}
}
