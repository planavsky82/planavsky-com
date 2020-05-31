import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDemoComponent } from './form-demo.component';
import { TextboxModule } from '../../../../ultimate-list/src/lib/textbox/textbox.module';
import { DropdownModule } from '../../../../ultimate-list/src/lib/dropdown/dropdown.module';
import { ButtonModule } from '../../../../ultimate-list/src/lib/button/button.module';
import { FormModule } from '../../../../ultimate-list/src/lib/form/form.module';

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
