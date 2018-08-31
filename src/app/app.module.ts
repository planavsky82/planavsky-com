import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationModule } from 'ultimate-list';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faGithub, faJs, faCss3Alt, faHtml5, 
  faNodeJs, faJenkins, faNpm, faGit, faSass, faLess, faLinux } from '@fortawesome/free-brands-svg-icons';

library.add(faAngular);
library.add(faGithub);
library.add(faJs);
library.add(faCss3Alt);
library.add(faHtml5);
library.add(faNodeJs);
library.add(faJenkins);
library.add(faNpm);
library.add(faGit);
library.add(faSass);
library.add(faLess);
library.add(faLinux);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    FontAwesomeModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
