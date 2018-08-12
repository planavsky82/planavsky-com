import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormComponent } from './form.component';
import { FormFieldDirective } from './form.directive';
import { FormService } from './form.service';
import { FormUtilities } from './form.utilities';

import { TextboxModule } from '../textbox/textbox.module';
import { TextboxComponent } from '../textbox/textbox.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonModule } from '../button/button.module';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextboxModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [
    FormComponent,
    FormFieldDirective
  ],
  exports: [
    FormComponent
  ],
  entryComponents: [
    TextboxComponent,
    DropdownComponent,
    ButtonComponent
  ],
  providers: [FormService, FormUtilities],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FormModule { }
