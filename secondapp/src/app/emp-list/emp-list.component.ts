import { Component, OnInit } from '@angular/core';
import { EmpDataService } from './emp-data.service';
import { Emp } from './emp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
arr:Emp[];
  constructor(private _empdata:EmpDataService,private _router:Router) { }

  ngOnInit() {
   this.arr= this._empdata.getAllEmployees();
  }
  onEmpDetails(item:Emp){
    this._router.navigate(['/empEdit',item.emp_id]);
  }

}
