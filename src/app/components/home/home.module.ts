import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CarpageModule } from '../carpage/carpage.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CarpageModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
