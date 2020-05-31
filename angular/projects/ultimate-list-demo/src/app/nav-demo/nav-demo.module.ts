import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDemoComponent } from './nav-demo.component';
import { NavigationModule } from '../../../../ultimate-list/src/lib/navigation';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [NavDemoComponent]
})
export class NavDemoModule { }
