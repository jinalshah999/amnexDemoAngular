import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
cnt:number;
  constructor(private _data:DemoService) { }

  ngOnInit() {
    this.cnt=this._data.getCount();
  }

}
