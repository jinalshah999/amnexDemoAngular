import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
cnt:number;
  constructor(private _Data:DemoService) { }

  ngOnInit() {
      this.cnt=this._Data.getCount();
  }
  onClick(){

    this.cnt=this._Data.incCounter();
  }
}
