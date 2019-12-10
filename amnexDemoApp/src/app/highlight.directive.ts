import { Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  b: string;
  @Input() c: string = "red";
  @HostListener("mouseenter") mouseover() {
    this.b = this.c;
  }
  @HostListener("mouseleave") mouseleave() {
    this.b = "white";
  }
  @HostBinding("style.background-color") get setColor1() {
    return this.b;
  }
}
