import { AdvcompPartComponent } from './../advcomp-part/advcomp-part.component';
import { Component, ContentChild, ContentChildren, QueryList, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-advcomp1-header',
  templateUrl: './advcomp1-header.component.html',
  styleUrls: ['./advcomp1-header.component.css']
})
export class Advcomp1HeaderComponent implements OnInit {

  @ContentChild('Cheader') Cheader: ElementRef;
  @ContentChild('Cbody') Cbody: ElementRef;
  @ContentChild(AdvcompPartComponent) advpart: AdvcompPartComponent;
  @ContentChildren(AdvcompPartComponent) advparts: QueryList<AdvcompPartComponent>;

  getAdvDate;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.getAdvDate = this.advpart.dateInfo;
    console.log(this.advparts);
  }
}
