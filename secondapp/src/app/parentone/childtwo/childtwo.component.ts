import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Todo } from "../todo";

@Component({
  selector: "app-childtwo",
  templateUrl: "./childtwo.component.html",
  styleUrls: ["./childtwo.component.css"]
})
export class ChildtwoComponent implements OnInit {
  cnt: number;
  constructor(public data: AppService) {}
  arr: Todo[]=[];
  ngOnInit() {
    console.log('ngoninit from child two');
    this.cnt = this.data.getCount();
    this.arr = this.data.getAllTodos();
  }
  onTodoClick(item: Todo) {
    this.data.deleteTodo(item);
  }
  onClick() {
    this.cnt = this.data.incCount();
  }
}
