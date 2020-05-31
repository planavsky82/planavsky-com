import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
