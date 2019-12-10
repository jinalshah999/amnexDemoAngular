import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  obj:Task=new Task('','');
  constructor(private _data:TaskdataService) { }
  onAddTask(){
    this._data.addTasks(this.obj);
  }
  ngOnInit() {
  }

}
