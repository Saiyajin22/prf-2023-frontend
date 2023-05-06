import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsComponent } from './car-details.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    CarDetailsComponent,
  ]
})
export class CarDetailsModule { }
