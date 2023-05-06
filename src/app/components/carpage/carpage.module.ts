import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarpageComponent } from './carpage.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CarpageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CarpageComponent
  ]
})
export class CarpageModule { }
