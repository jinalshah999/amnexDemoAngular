import { Component, OnInit, DoCheck } from "@angular/core";
import { AppService } from "../app.service";
import { Todo } from "../todo";

@Component({
  selector: "app-childone",
  templateUrl: "./childone.component.html",
  styleUrls: ["./childone.component.css"]
})
export class ChildoneComponent implements OnInit,DoCheck {
  cnt: number;
  constructor(public data: AppService) {}
  arr: Todo[]=[];
  ngDoCheck(){
    console.log('from chileone');
  }
  ngOnInit() {
    console.log('ngoninit from child one');
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
