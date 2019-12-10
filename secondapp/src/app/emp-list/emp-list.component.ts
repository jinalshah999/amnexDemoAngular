import { Component, OnInit } from '@angular/core';
import { EmpDataService } from './emp-data.service';
import { Emp } from './emp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
arr:Emp[];
  constructor(private _empdata:EmpDataService) { }

  ngOnInit() {
   this.arr= this._empdata.getAllEmployees();
  }

}
