import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  UlFormConfig,
  UlFormFieldChange,
  UlFormFieldConfig,
  UlFormUIState,
  UlFormFieldState,
  UlFormFieldRule,
  ReactiveFormServiceFieldValue
} from './form.model';
import { FormUtilities } from './form.utilities';

@Injectable()
export class FormService {
  private fieldValue: ReactiveFormServiceFieldValue = {
    name: '',
    value: undefined
  };
  fieldValue$: BehaviorSubject<ReactiveFormServiceFieldValue>;

  private fieldChange: any = {
    name: '',
    data: undefined
  };
  fieldChange$: BehaviorSubject<any>;

  private uiState: UlFormUIState = [];
  uiState$: BehaviorSubject<UlFormUIState>;

  public config: UlFormConfig;
  public form: any;
  private process: any = eval;

  constructor(private http: HttpClient,
    private utilities: FormUtilities) {
    this.fieldValue$ = new BehaviorSubject<ReactiveFormServiceFieldValue>(this.fieldValue);
    this.fieldChange$ = new BehaviorSubject<any>(this.fieldChange);
    this.uiState$ = new BehaviorSubject<UlFormUIState>(this.uiState);
  }

  get formUiState(): UlFormUIState {
    return this.uiState;
  }

  update(fieldValue: ReactiveFormServiceFieldValue, form?: any) {
    this.fieldValue = {
      name: fieldValue.name,
      value: fieldValue.value
    };

    this.changeState(fieldValue, form);
    this.notify();
  }

  private notify() {
    this.fieldValue$.next(this.fieldValue);
  }

  setData(change: UlFormFieldChange) {
    if (change.url) {
      this.http.get(change.url).subscribe((res: any) => {
        this.fieldChange = {
          name: change.name,
          data: res
        };
        this.notifyFieldChange();
      });
    }
  }

  private notifyFieldChange() {
    this.fieldChange$.next(this.fieldChange);
  }

  initState(config: UlFormConfig, form: any) {
    this.uiState = [];
    this.config = config;

    config.forEach((field) => {
      let fieldState: UlFormFieldState = {
        name: field.name,
        display: field.rules ? this.checkRule(field.rules, form, 'display', true) : true,
        enable: field.rules ? this.checkRule(field.rules, form, 'enable', true) : true,
        required: field.rules ? this.checkRule(field.rules, form, 'required', false) : false
      };
      this.uiState.push(fieldState);
    });

    this.notifyUIState();
  }

  changeState(fieldState: ReactiveFormServiceFieldValue, form: any) {
    let newState = this.uiState.map((state) => {
      let display = true;
      let enable = true;
      let required = false;
      this.config.forEach((field) => {
        if (field.name === state.name && field.rules) {
          display = this.checkRule(field.rules, form, 'display', true);
          enable = this.checkRule(field.rules, form, 'enable', true);
          required = this.checkRule(field.rules, form, 'required', false);
        }
      });
      return { enable, display, required, name: state.name };
    });
    this.uiState = newState;

    this.notifyUIState();
  }

  private notifyUIState() {
    this.uiState$.next(this.uiState);
  }

  private checkRule(rules: UlFormFieldRule[], form: any, ruleType: UlFormFieldRule['type'], defaultValue: boolean) {
    let result = defaultValue;
    if (form && form.controls) {
      rules.forEach((rule) => {
        if (rule.type === ruleType) {
          result = this.process(this.utilities.parseStr(rule.condition, form, this.config));
        }
      });
    }
    return result;
  }
}
