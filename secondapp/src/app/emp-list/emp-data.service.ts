import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  private emp_arr:Emp[]=[
    new Emp('101','jinal','123','ahmedabad')
  ];
  constructor() { }
  getAllEmployees():Emp[]{
    return this.emp_arr;
  }
  addEmployee(obj:Emp):void{
    this.emp_arr.push(obj);
  }
  deleteEmployee(obj:Emp):void{
    this.emp_arr.splice(this.emp_arr.indexOf(obj),1);
  }
  findEmployee(emp_id:string):Emp[]{
   return  this.emp_arr.filter((x)=>x.emp_id==emp_id);
  }
}
