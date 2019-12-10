import { Component, OnInit, ViewChild, ContentChild, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  @ContentChild('h11',{static:true}) h11;
  str: string = "jinal";
  str1: string = "fasdfsafdasfsd";
  no1: string = '0';
  no2: string = '0';
  ans: number = 0;
  ans1:number=0;
  flag:boolean=false;
  constructor() {}

  ngOnChanges(){
    console.log("hello from onchanges");
  }
  ngOnInit() {
    console.log("hello from oninit");
  }
  ngDoCheck(){
    console.log("hello from docheck");
  }
  ngAfterContentInit(){
    console.log("hello from oncontentinit");
  }
  ngAfterContentChecked(){
    console.log("hello from oncontent checked");
  }
  ngAfterViewInit(){
    console.log("hello from on view init");
  }
ngAfterViewChecked(){
  console.log("hello from onview checked");
}
  onClick(): void {
    alert("hello");
  }
  onAdd(): void {
    this.ans= parseInt( this.no1)+ parseInt( this.no2);
  }
  onAdd1(val1:string,val2:string){

    this.ans1=parseInt(val1)+parseInt(val2);
  }
}
