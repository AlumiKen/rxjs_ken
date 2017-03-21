import { Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appTest1]'
})
export class Test1Directive {

  @HostBinding('style.color') textColor:string = 'red'

  @HostListener('click', ['$event'])
  changeColor($event: MouseEvent){
    this.textColor = this.textColor == 'green' ? 'red' : 'green';
    console.dir($event);//列出所有物件的屬性(包含自己擴充的)
  }

  constructor(private el:ElementRef, private renderer:Renderer) { }

  ngOnInit() {

  }
}
