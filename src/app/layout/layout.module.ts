import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { CardsComponent } from './../cards/cards.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    CardsComponent
  ]
})
export class LayoutModule { }
