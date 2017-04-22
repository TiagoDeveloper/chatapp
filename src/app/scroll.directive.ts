import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer ) { 
  }
  ngAfterContentChecked() {
    this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollHeight;
  }

}
