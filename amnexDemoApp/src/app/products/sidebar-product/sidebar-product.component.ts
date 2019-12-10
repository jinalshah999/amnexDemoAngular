import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: "app-sidebar-product",
  templateUrl: "./sidebar-product.component.html",
  styleUrls: ["./sidebar-product.component.css"]
})
export class SidebarProductComponent implements OnInit,OnChanges {

  @Input() category: string = "";
  @Output() myEvent = new EventEmitter<string>();
  constructor() {}
  onKeyUp(val) {
    this.myEvent.emit(val);
  }
  ngOnChanges(sample:SimpleChanges){
    this.category=sample.category.currentValue+" sdfasdf";
    console.log(sample);
  }
  ngOnInit() {}
}
