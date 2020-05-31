import { ValidatorFn, Validators } from '@angular/forms';

// TODO: generate UlFormFieldType dynamically in index.js
// abstracted fields
export type UlFormControl =
  'textbox' |
  'select' |
  'button';

export interface UlFormFieldConfig {
  type: UlFormControl;
  name: string;
  label?: string;
  value?: any;
  options?: UlFormFieldOption[];
  url?: string;
  disabled?: boolean;
  placeholder?: string;
  // ValidatorFn[]; // validators: [{ minLength: 2 }]
  validation?: UlFormFieldValidator[]; 
  validationMessages?: string[];
  inputs?: UlFormFieldInputs;
  rules?: UlFormFieldRule[];
  messages?: string[];
  content?: string;
  formGroupLabel?: string;
  formElement?: boolean;
  display?: boolean;
}

export interface UlFormFieldChange {
  name: string;
  url?: string;
  value: any;
}

export interface UlFormFieldChangeResponse {
  name: string;
  data?: any;
}

export type UlFormConfig = UlFormFieldConfig[];

export interface UlFormFieldInputs {
  [key: string]: any;
}

export interface UlFormFieldOption {
  name: string;
  value: any;
}

export interface UlFormFieldRule {
  condition: string;
  type: 'display' | 'enable' | 'required';
}

export type UlFormFieldValidator = 'required'
  | { minLength: number }
  | { maxLength: number }
  | { min: number }
  | { max: number }
  | { length: [number, number] }
  | { date: string };

export type UlFormUIState = UlFormFieldState[];

export interface UlFormFieldState {
  name: string;
  display?: boolean;
  enable?: boolean;
  required?: boolean;
}

export interface ReactiveFormServiceFieldValue {
  name: string;
  value: any;
}

export type UlFormRelationships = UlFormRelationship[];

export interface UlFormRelationship {
  dependent: string;
  provider: string;
}
