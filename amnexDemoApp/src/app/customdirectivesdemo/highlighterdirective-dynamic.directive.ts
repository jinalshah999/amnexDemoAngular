import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appHighlighterdirectiveDynamic]"
})
export class HighlighterdirectiveDynamicDirective implements OnInit {
  private fontColor: string;

  constructor(private el: ElementRef) {}

  @Input() defaultColor: string;
  @Input("appHighlighterdirectiveDynamic") highlightColor: string;

  ngOnInit() {
    this.highlight(this.defaultColor);
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor);
    this.fontColor = "white";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(this.defaultColor);
    this.fontColor = "lightgray";
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostBinding("style.color") get setColor() {
    return this.fontColor;
  }
}
