// GENERATES THE REACTIVE FORM MODEL

import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from '../form/form.service';
import { FormUtilities } from './form.utilities';

import {
  UlFormConfig,
  UlFormFieldConfig,
  UlFormFieldValidator,
  UlFormControl,
  UlFormFieldRule,
  UlFormUIState,
  UlFormRelationships,
  UlFormFieldState,
  ReactiveFormServiceFieldValue,
} from './form.model';
import { VALIDATOR_MAP } from './form.validator.map';

export const FORM_CONTROLS: UlFormControl[] = [
  'textbox',
  'select',
  'button'
];

@Component({
  selector: 'ul-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() config: UlFormConfig = [];
  form: FormGroup;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() formChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() formLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  public subscriber: Subscription;
  public uiStateSubscriber: Subscription;
  public tempState: UlFormUIState;
  public uiState: UlFormUIState;
  public relationships: UlFormRelationships;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private utilities: FormUtilities) {
    this.subscriber = this.formService.fieldValue$.subscribe(this.handleFieldChange.bind(this));
  }

  handleFieldChange(field: ReactiveFormServiceFieldValue) {
    if (this.form && this.form.controls[field.name]) {
      this.form.controls[field.name].setValue(field.value);
      this.form.controls[field.name].updateValueAndValidity({ onlySelf: true, emitEvent: true });
      this.form.controls[field.name].markAsTouched();
      this.formService.changeState(field.value, this.form);
    }
  }

  uiStateHandler(state: UlFormUIState) {
    this.tempState = state;
  }

  checkState() {
    setTimeout(() => {
      this.uiState = this.tempState;
      this.checkRequired(this.uiState);
      this.checkProviderRequired(this.uiState);
      this.formChange.emit(this.form);
    });
  }

  get controls() { return this.config; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      this.subscriber = this.formService.fieldValue$.subscribe(this.handleFieldChange.bind(this));
      this.init();
    }
  }

  init() {
    this.parseConfig();
    this.form = this.createGroup();
    this.relationships = this.utilities.getRelationships(this.config);
    this.formService.initState(this.config, this.form);
    this.uiStateSubscriber = this.formService.uiState$.subscribe(this.uiStateHandler.bind(this));
    this.uiState = this.formService.formUiState;
  }

  parseConfig() {
    this.config.forEach((control, index) => {
      let ctrl = this.config[index];

      ctrl.formElement = this.isFormControl(this.config[index].type);
    });
  }

  isFormControl(fieldType: string): boolean {
    return !!FORM_CONTROLS.find((type: string) => {
      return type === fieldType;
    });
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach((control) => {
      if (control.formElement) {
        group.addControl(control.name, this.createControl(control));
      }
    });
    return group;
  }

  checkRequired(state: UlFormUIState) {
    state.forEach((field) => {
      if (this.form.controls[field.name]) {
        this.applyRequiredValidation(field, false);
      }
    });
  }

  applyRequiredValidation(field: UlFormFieldState, isProvider: boolean) {
    if (field.required) {
      this.form.controls[field.name].setValidators(Validators.required);
    } else {
      this.form.controls[field.name].clearValidators();
      let control = this.config.filter((configField) => {
        return configField.name === field.name;
      })[0];
      let validators: ValidatorFn[] = [];
      if (control.validation) {
        validators = this.generateValidators(control.validation);
        this.form.controls[field.name].setValidators(validators);
      }
    }
    if (!isProvider) {
      this.form.controls[field.name].updateValueAndValidity({ onlySelf: true, emitEvent: true });
      this.form.controls[field.name].markAsTouched();
    }
  }

  checkProviderRequired(state: UlFormUIState) {
    state.forEach((field) => {
      let providerRequired = false;
      let relationships = this.relationships.filter((relationship) => {
        return relationship.provider === field.name;
      });
      if (relationships) { // and check for required
        relationships.forEach((relationship) => {
          if (this.isRequired(relationship.dependent)) {
            providerRequired = true;
            return;
          }
        });
      }
      if (providerRequired) {
        field.required = true;
        this.applyRequiredValidation(field, true);
      }
    });
  }

  isRequired(name: string) {
    let configuredRequired = this.config.filter((field) => {
      return field.name === name && field.validation && field.validation.filter((validation) => {
        return validation === 'required';
      });
    });
    let dynamicRequired = this.uiState.filter((field) => {
      return field.name === name && field.required;
    });
    return (configuredRequired.length > 0 || dynamicRequired.length > 0);
  }

  createControl(config: UlFormFieldConfig) {
    let validators: ValidatorFn[] = [];
    if (config.validation) {
      validators = this.generateValidators(config.validation);
    }
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validators);
  }

  getLabel(label: string, field: UlFormFieldConfig, errors: any): string {
    if (errors !== null) {
      label = 'The "' + label + '" field is invalid';
      Object.keys(errors).forEach(function(key) {
        field.validation.forEach((validator, i) => {
          if (validator === key) {
            label = field.validationMessages[i].replace('{{label}}', field.label);
            return true;
          }
          Object.keys(validator).forEach(function(validatorKey) {
            if (validatorKey.toLowerCase() === key.toLowerCase()) {
              label = field.validationMessages[i].replace('{{label}}', field.label);;
              return true;  
            }
          });
        });
      });
    }
    return label;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.formSubmit.emit(this.value);
  }

  generateValidators(validation: UlFormFieldValidator[]): ValidatorFn[] {
    let validators: ValidatorFn[] = [];

    validation.forEach((validator: any) => { // TODO: define as type UlFormFieldValidator
      let validatorName: string;
      let validatorValue: any;
      if (typeof validator === 'string') {
        validatorName = validator;
        validators.push(VALIDATOR_MAP[validator]);
      } else {
        Object.keys(validator).map((obj: any): any => {
          validatorName = obj;
          validatorValue = validator[obj];
          validators.push(VALIDATOR_MAP[validatorName](validatorValue));
        });
      }
    });
    return validators;
  }

  loaded(event: Event) {
    this.formLoaded.emit(true);
  }
}
