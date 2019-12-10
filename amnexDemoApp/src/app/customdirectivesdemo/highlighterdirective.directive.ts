import { Directive, OnInit, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHighlighterdirective]"
})
export class HighlighterdirectiveDirective implements OnInit {
  private backgroundColor: string;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = "white";
    this.bgcolor=this.backgroundColor;
  }

  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = "green";
    this.bgcolor=this.backgroundColor;
  }

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = "white";
    this.bgcolor=this.backgroundColor;
  }

  @HostBinding("style.background-color")
  bgcolor: string;
}
