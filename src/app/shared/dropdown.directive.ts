import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') openDropdown: boolean=false;

  @HostListener('click') openDropdownMenu() {
    console.log('got it');
    this.openDropdown = !this.openDropdown;
  }
}
