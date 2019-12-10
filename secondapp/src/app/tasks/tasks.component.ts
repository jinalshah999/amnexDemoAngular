import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from './taskdata.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 arr:Task[];
  constructor(public _data:TaskdataService) { }

  ngOnInit() {
  this.arr=this._data.getAllTasks();
  }
  onDelete(item:Task){
    this._data.deleteTask(item);
  }

}
