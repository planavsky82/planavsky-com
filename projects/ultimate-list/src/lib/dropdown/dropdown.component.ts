import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';

import { DropdownData } from './dropdown.util';

@Component({
  selector: 'ul-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent {
  @Input() options: DropdownData[];
  @Input() placeholder: string = 'Select an Option';

  public internalValue: number;

  //get accessor
  get value(): any {
    return this.internalValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.internalValue) {
      this.internalValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(newValue: number): void {
    if (newValue !== this.internalValue) {
      this.internalValue = newValue;
    }
  }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onChange() {
    this.onChangeCallback(this.internalValue);
  }

  onBlur() {
    this.onTouchedCallback();
  }
}
