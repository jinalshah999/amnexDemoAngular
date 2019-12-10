import { Component, OnInit } from '@angular/core';
import { TododataService } from './tododata.service';
import { Task } from './task';


@Component({
  selector: 'app-tododemows',
  templateUrl: './tododemows.component.html',
  styleUrls: ['./tododemows.component.css']
})
export class TododemowsComponent implements OnInit {

arr:Task[]=[];
  constructor(private data:TododataService) { }

  ngOnInit() {
    this.arr=this.data.getAllTasks();
  }
  onDelete(item:Task):void{
    this.data.deleteTask(item);
  }
}
