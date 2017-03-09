import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './../cards/cards.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { FlotComponent } from './../charts/flot/flot.component';
//import { ChartsRoute } from './../charts/charts-routing.module';

const routes: Routes = [
  { path: '', component:LayoutComponent,
    children:[
      { path: '', redirectTo:'/login', pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:num', component: CardsComponent },
      {
        path:'charts',
        //延遲載入
        loadChildren: '../charts/charts.module#ChartsModule'
      }

      //拉出來獨立一個Route
      //ChartsRoute

      //直接展開
      // { path: 'charts',
      //     children: [
      //       { path: 'flot', component: FlotComponent },
      //     ]
      // }
    ]
  }

  // { path: 'dashboard', component:LayoutComponent,
  //   children:[
  //     { path: '', component: DashboardComponent }
  //   ]
  // },
  // { path: 'cards', component:LayoutComponent,
  //   children:[
  //     { path: '', component: CardsComponent }
  //   ]
  // },
  // { path: 'cards/:num', component:LayoutComponent,
  //   children:[
  //     { path: '', component: CardsComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
