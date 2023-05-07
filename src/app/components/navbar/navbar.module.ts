import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
