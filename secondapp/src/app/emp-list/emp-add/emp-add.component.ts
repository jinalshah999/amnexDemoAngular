import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  constructor(private _empdata:EmpDataService) { }

  ngOnInit() {
  }
  onUserAdd(f){
    console.log(f);
    this._empdata.addEmployee(f.value);
  }
}
