import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormFieldDirective } from './form.directive';
import { FormService } from './form.service';
import { FormUtilities } from './form.utilities';
import { HttpClientModule } from '@angular/common/http';

import { TextboxModule, TextboxComponent } from '../textbox';
import { DropdownModule, DropdownComponent } from '../dropdown';
import { ButtonModule, ButtonComponent } from '../button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextboxModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule
  ],
  declarations: [
    FormComponent,
    FormFieldDirective
  ],
  exports: [FormComponent],
  entryComponents: [
    TextboxComponent,
    DropdownComponent,
    ButtonComponent
  ],
  providers: [FormService, FormUtilities],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FormModule { }
