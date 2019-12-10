import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";

@Component({
  selector: "app-childonesol",
  templateUrl: "./childonesol.component.html",
  styleUrls: ["./childonesol.component.css"]
})
export class ChildonesolComponent implements OnInit {
  constructor(private data: DemoService) {}
  cnt: number;
  ngOnInit() {
    this.data.count.subscribe(x => {
      this.cnt = x;
    });
  }
  onClick() {
    this.data.nextCount();
  }
}
