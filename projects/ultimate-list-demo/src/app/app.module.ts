import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TextboxModule } from '../../../ultimate-list/src/lib/textbox/textbox.module';
import { DropdownModule } from '../../../ultimate-list/src/lib/dropdown/dropdown.module';
import { ButtonModule } from '../../../ultimate-list/src/lib/button/button.module';
import { FormModule } from '../../../ultimate-list/src/lib/form/form.module';
import { NavigationModule } from '../../../ultimate-list/src/lib/navigation/navigation.module';

import { HomeModule, HomeComponent } from './home';
import { FormDemoModule, FormDemoComponent } from './form-demo';
import { NavDemoModule, NavDemoComponent } from './nav-demo';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormDemoComponent },
  { path: 'nav', component: NavDemoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },  
]; 

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    HomeModule,
    FormDemoModule,
    NavDemoModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SampleComponent]
})
export class AppModule { }
