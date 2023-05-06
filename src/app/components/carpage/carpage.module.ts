import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarpageComponent } from './carpage.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CarpageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    CarpageComponent
  ]
})
export class CarpageModule { }
