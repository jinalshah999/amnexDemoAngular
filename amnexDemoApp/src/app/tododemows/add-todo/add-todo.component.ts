import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TododataService } from '../tododata.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
obj:Task=new Task('','');
arr:Task[]=[];
constructor(private data:TododataService) { }

ngOnInit() {
  this.arr=this.data.getAllTasks();
}
onDelete(item:Task):void{
  this.data.deleteTask(item);
}
  onTaskAdd(){
    this.data.addTask(this.obj);
  }
}
