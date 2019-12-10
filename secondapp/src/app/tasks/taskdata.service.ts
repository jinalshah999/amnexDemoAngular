import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  arr:Task[]=[
    new Task('1','Email to manager'),
    new Task('2','learn angular')
  ];
  constructor() {
    console.log("from service");
  }
  getAllTasks():Task[]{
    return this.arr;
  }
  addTasks(obj:Task){
    this.arr.push(obj);
  }
  deleteTask(obj:Task){
    this.arr.splice(this.arr.indexOf(obj),1);
  }
}
