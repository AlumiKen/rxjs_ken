import { getRelativePath } from 'tslint/lib/configuration';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  num: number = 1;
  p1;
  p2;

  constructor(
    private router:Router
  , private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    //只會抓住第一次產生component的值
    //this.num = this.route.snapshot.params['num'];
    this.p1 = this.route.snapshot.params['p1'];
    this.p2 = this.route.snapshot.params['p2'];

    this.route.params.subscribe(
      (param) => {
         if(!isNaN(parseInt(param['num']))){
           this.num = parseInt(param['num']);
         }
         else {
           this.router.navigate(['/cards', this.num, {p1:this.p1, p2:this.p2}]);
         }
      }
    );
  }

  goHome(){
    this.router.navigateByUrl('/');
  }

  goChartsFlot(){
    this.router.navigate(['/charts','flot']);
  }

  addNumOne(){
      //絕對路徑寫法
      //this.router.navigate(['/cards', this.num+1]);

      //相對路徑寫法, '..'先回上一層
      this.router.navigate(['..', this.num+1, {p1:this.p1, p2:this.p2}],
        {
          relativeTo: this.route
          ,queryParams: {
            name: 'ken'
          }
        }
      );
  }

}
