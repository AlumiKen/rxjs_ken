import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';
//import { LayoutComponent } from './../layout/layout.component';

const routes: Routes = [
    // { path: 'charts', component:LayoutComponent,
    //   children: [
    //     // { path:'', redirectTo:'flot', pathMatch: 'full' },
    //     { path: 'flot', component: FlotComponent }
    //   ]
    // }

    { path: 'flot', component: FlotComponent },
    { path: 'radial', component: RadialComponent },
    { path: 'rickshaw', component: RickshawComponent }
];

// export const ChartsRoute: Route =
//     { path: 'charts',
//       children: [
//         { path: 'flot', component: FlotComponent }
//       ]
//     }
// ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
