import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
cnt:number;
  constructor(private data:DemoService) { }

  ngOnInit() {
    this.data.count.subscribe(
      (x)=>{
        this.cnt=x;
      }
    );
  }

}
