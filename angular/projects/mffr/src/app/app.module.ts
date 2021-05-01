import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule, MetaReducer, META_REDUCERS } from '@ngrx/store';
import { addUserReducer } from './reducers/user.reducer';
import { storageMetaReducer } from './shared/state/storage.metareducer';
import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from './app.tokens';
import { LocalStorageService } from './shared/state/local-storage.service';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'rankings', component: MainComponent },
  { path: '**', component: HomeComponent }
];

// factory meta-reducer configuration function
export function getMetaReducers(saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService
  ): MetaReducer<any>[] {
  return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(
      { user: addUserReducer }
    )
  ],
  providers: [
    { provide: ROOT_STORAGE_KEYS, useValue: ['user.name', 'user.pwd', 'user.admin', 'user.email'] },
    { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__'},
    {
      provide: META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getMetaReducers
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
