import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    SharedHeaderComponent
  ]
})
export class SharedModule { }
