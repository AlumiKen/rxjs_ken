import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { LayoutModule } from './layout/layout.module';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NeedLoginGuard } from './need-login.guard';
import { Form2Component } from './form2/form2.component';
import { Advcomp1Component } from './advcomp1/advcomp1.component';
import { Advcomp1HeaderComponent } from './advcomp1-header/advcomp1-header.component';
import { AdvcompPartComponent } from './advcomp-part/advcomp-part.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    LoginComponent,
    Form2Component,
    Advcomp1Component,
    Advcomp1HeaderComponent,
    AdvcompPartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    NeedLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
