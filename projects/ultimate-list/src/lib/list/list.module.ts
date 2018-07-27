import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent, ListComponentDirective } from './list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ListComponent, 
    ListComponentDirective
  ],
  exports: [
    ListComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ListModule { }
