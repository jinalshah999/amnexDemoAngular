import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor() { }
  arr:Task[]=[
    new Task('1','jinal'),
    new Task('2','shah')
  ];
  getAllTasks():Task[]{
    return this.arr;
  }
  addTask(task:Task):void{
    this.arr.push(task);
  }
  deleteTask(task:Task):void{
    this.arr.splice(this.arr.indexOf(task),1);
  }
}
