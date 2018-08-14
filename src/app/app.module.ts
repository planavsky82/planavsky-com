import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationModule } from 'ultimate-list';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
