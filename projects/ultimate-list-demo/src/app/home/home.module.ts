import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListModule } from '../list';

@NgModule({
  imports: [
    CommonModule,
    ListModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
