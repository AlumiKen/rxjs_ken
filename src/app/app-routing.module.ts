import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';

import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { fallbackRoute } from './page1/fallback.Route';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes
              //extra option
              ,{
                  // useHash: true,
                  // enableTracing: true,

                  //預先載入, 載入第一個module時, 會在"背景"把所有module載入, "可以設定在任意module裡面"
                  preloadingStrategy: PreloadAllModules
               }
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
