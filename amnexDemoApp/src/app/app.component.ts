import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
 // @ViewChild("p1", { static: true }) p1;
  title = "";
  selectedCat: string = "watch";
  ngOnInit() {
   // console.log(this.p1.nativeElement.textContent);
  }
  onMyEvent(value) {
    this.title = value;
    console.log("I am from Parent " + value);
  }
}
