import { IMonthViewDay } from './../advcomp1/advcomp1.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advcomp-part',
  templateUrl: './advcomp-part.component.html',
  styleUrls: ['./advcomp-part.component.css']
})
export class AdvcompPartComponent implements OnInit {

  @Input()
  dateInfo: IMonthViewDay;

  constructor() { }

  ngOnInit() {
  }

}
