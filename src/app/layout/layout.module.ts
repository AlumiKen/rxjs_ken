import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './../form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { CardsComponent } from './../cards/cards.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    CardsComponent,
    FormComponent
  ]
})
export class LayoutModule { }
