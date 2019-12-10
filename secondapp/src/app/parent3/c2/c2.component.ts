import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";

@Component({
  selector: "app-c2",
  templateUrl: "./c2.component.html",
  styleUrls: ["./c2.component.css"]
})
export class C2Component implements OnInit {
  cnt: number;
  constructor(private _data: DemoService) {}

  ngOnInit() {
    this.cnt = this._data.getCount();
  }
  onClick() {
    this.cnt = this._data.incCounter();
  }
}
