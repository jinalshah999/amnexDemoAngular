import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TododataService } from '../tododata.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  arr:Task[]=[];
  constructor(private data:TododataService) { }

  ngOnInit() {
    this.arr=this.data.getAllTasks();
  }
  onDelete(item:Task):void{
    this.data.deleteTask(item);
  }

}
