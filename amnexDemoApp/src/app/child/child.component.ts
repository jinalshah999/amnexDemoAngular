import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']

})
export class ChildComponent implements OnInit {

@Input() cat:string='';
@Output() myEvent=new EventEmitter();
  constructor() { }
  onChildClick(val){
    console.log("I am From child "+ val);
    this.myEvent.emit(val);
  }
  ngOnInit() {
  }

}
