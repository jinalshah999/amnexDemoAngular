import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appRoundBlock]"
})
export class RoundBlockDirectiveDirective {
  @Input() appRoundBlock: string;

  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    let roundVal = `${this.appRoundBlock}`;
    this.renderer.setStyle(
      this.elmRef.nativeElement,
      "border-radius",
      roundVal
    );
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.changeShape("100px");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.changeShape("25px");
  }

  private changeShape(radious) {
    let radiusVal = `${radious}`;
    this.renderer.setStyle(
      this.elmRef.nativeElement,
      "border-radius",
      radiusVal
    );
  }
}
