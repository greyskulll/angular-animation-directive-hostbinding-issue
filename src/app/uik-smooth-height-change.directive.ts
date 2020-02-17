import {Directive, ElementRef, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSmoothHeightChange]',
})
export class SmoothHeightChangeDirective implements OnChanges {

  @Input()
  appSmoothHeightChange;
  changing: boolean;
  currHeight: number;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.overflow') overflow = 'hidden';

  constructor(private element: ElementRef) {
  }

  // TODO: Fix animations - broken in Angular 9 upgrade
  @HostBinding('@heightChange')
  get heightChange() {
    return {
      value: this.changing,
      params: {
        currentHeight: this.currHeight
      }
    };
  }

  setCurrentHeight() {
    this.currHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges(changes) {
    this.setCurrentHeight();
    this.changing = !this.changing;
  }
}
