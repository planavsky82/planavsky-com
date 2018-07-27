import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TextboxModule } from './modules/textbox/textbox.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { ButtonModule } from './modules/button/button.module';
import { FormModule } from './modules/form/form.module';
import { NavigationModule } from './modules/navigation/navigation.module';

import { HomeModule, HomeComponent } from './modules/home';
import { FormDemoModule, FormDemoComponent } from './modules/form-demo';
import { NavDemoModule, NavDemoComponent } from './modules/nav-demo';

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
