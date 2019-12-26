import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { ActivatedRoute } from '@angular/router';
import { TododataService } from './tododata.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
todos:Todo[]=[];
  constructor(private _acroute:ActivatedRoute) { }

  ngOnInit() {

   this.todos= this._acroute.snapshot.data['xyz'];

  }

}
