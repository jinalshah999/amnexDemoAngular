import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Todo } from './todo';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.css']
})
export class ParentoneComponent implements OnInit {
  cnt:number;
  arr:Todo[]=[];
  constructor(public data:AppService){

  }
  ngOnInit(){
    console.log('ngoninit from app');
    this.cnt=this.data.getCount();
    this.arr=this.data.getAllTodos();
  }
  onTodoClick(item:Todo){
    this.data.deleteTodo(item);
  }

}
