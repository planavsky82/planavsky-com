import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ListModule } from './modules/list/list.module';
import { TextboxModule } from './modules/textbox/textbox.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { ButtonModule } from './modules/button/button.module';
import { FormModule } from './modules/form/form.module';
import { NavigationModule } from './modules/navigation/navigation.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ListModule,
        TextboxModule,
        DropdownModule,
        ButtonModule,
        FormModule,
        FormsModule,
        NavigationModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
