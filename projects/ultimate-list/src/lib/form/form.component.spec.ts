/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { FormComponent } from './form.component';
import { FormService } from './form.service';
import { FormUtilities } from './form.utilities';
import { UlFormConfig } from './form.model';
import { SAMPLE_CONFIG } from './form.mock';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let config: UlFormConfig = SAMPLE_CONFIG;

  let getState = (name: string) => {
    return component.uiState.filter(function(state) {
      return state.name === name;
    })[0];
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [FormBuilder, FormService, FormUtilities, HttpClient, HttpHandler],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.config = config;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the initial ui state', () => {
    expect(getState('textbox').display).toBeTruthy();
    expect(getState('select').display).toBeTruthy();
    expect(getState('submit').display).toBeTruthy();
  });

  it('should test for valid form controls', () => {
    expect(component.isFormControl('textbox')).toBeTruthy();
    expect(component.isFormControl('select')).toBeTruthy();
  });

  it('should create a form group', () => {
    expect(Object.keys(component.createGroup().controls).length).toEqual(3);
    expect(component.form.controls.textbox.value).toBe('sample text');
    expect(component.form.controls.select.value).toBe(2);
  });

  it('should change reactive form values and validate form', () => {
    component.form.controls['textbox'].setValue('sample');
    component.form.controls['select'].setValue(3);
    expect(component.form.valid).toBeTruthy();
  });

  /* it('should check validation', () => {
    expect(component.form.controls['textbox'].valid).toBeFalsy();
    component.form.controls['textbox'].setValue('ab');
    expect(component.form.controls['Text'].valid).toBeFalsy();
  }); */
});
