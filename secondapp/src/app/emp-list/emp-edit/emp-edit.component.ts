import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDataService } from '../emp-data.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  emp_id:string;
  arr:Emp[];
  constructor(private _acroutes:ActivatedRoute,private _empdata:EmpDataService) { }

  ngOnInit() {
    this.emp_id=this._acroutes.snapshot.params["emp_id"];

    this.arr=this._empdata.findEmployee(this.emp_id);
  }

}
