import {
  Component, forwardRef
} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, ValidatorFn, AbstractControl
} from '@angular/forms';

export function forbiddenStringValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenString': {value: control.value}} : null;
  };
}

@Component({
  selector: 'ul-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true
    }
  ]
})
export class TextboxComponent implements ControlValueAccessor {
  public internalValue: any;

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
  
  writeValue(newValue: string): void {
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

  onBlur() {
    this.onTouchedCallback();
  }
} 
