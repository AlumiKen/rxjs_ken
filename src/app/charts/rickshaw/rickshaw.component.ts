import { Component, OnInit } from '@angular/core';
import { RickshawCharts } from './init';
@Component({
  selector: 'app-rickshaw',
  templateUrl: './rickshaw.component.html',
  styleUrls: ['./rickshaw.component.css']
})
export class RickshawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(RickshawCharts);
  }

}
