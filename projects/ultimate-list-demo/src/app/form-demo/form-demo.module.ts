import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDemoComponent } from './form-demo.component';
import { TextboxModule } from '../textbox/textbox.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    TextboxModule,
    DropdownModule,
    ButtonModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormDemoComponent]
})
export class FormDemoModule { }
