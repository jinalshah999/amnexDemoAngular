import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";

@Component({
  selector: "app-childtwosol",
  templateUrl: "./childtwosol.component.html",
  styleUrls: ["./childtwosol.component.css"]
})
export class ChildtwosolComponent implements OnInit {
  cnt: number;
  constructor(private data: DemoService) {}

  ngOnInit() {
    this.data.count.subscribe(x => {
      this.cnt = x;
    });
  }
  onClick() {
    this.data.nextCount();
  }
}
