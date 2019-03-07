import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputContactFormat]'
})
export class InputContactFormatDirective {
  constructor(private _el: ElementRef) { }
  //@Input('format') format;
  @Input('appInputContactFormat') format;
  // @HostListener('focus') onFocus(){
  //   console.log("on focus");
  // }

  @HostListener('blur') onBlur(){
    console.log("on blur");
    let value: string = this._el.nativeElement.value;
    if(this.format=='lower')
      this._el.nativeElement.value = value.toLowerCase();
    else
      this._el.nativeElement.value = value.toUpperCase();
  }
  

}
