import { Observable } from 'rxjs/Observable';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FlotCharts } from './init';
import 'rxjs';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlotComponent implements OnInit {

  temp:number = 1;

  constructor(private zone: NgZone, private cd:ChangeDetectorRef) {

    Observable.interval(1000).subscribe((id) => {
        /**
         * 想要每秒+1呈現在畫面上
         */
        this.temp++;
        /**
         * 設定changeDetection: ChangeDetectionStrategy.OnPush
         * 要加ChangeDetectorRef.markForCheck, view才會再更新
         */
        this.cd.markForCheck();
      });
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      $(FlotCharts);
    })
  }

  showText(){
    console.log(new Date());
    return 'haha';
  }
}
