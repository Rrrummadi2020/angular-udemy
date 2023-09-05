import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white'
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'yellow';
  }
  constructor() { }

}
