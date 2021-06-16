import * as owasp from 'owasp-password-strength-test';

export interface ValidatorResponse {
  valid: boolean;
  message: string;
}

export class Validator {
  private validState: ValidatorResponse = {
    valid: true,
    message: 'OK'
  };

  constructor() {}

  hasValue(value: string): ValidatorResponse {
    let valid = value !== '' && value !== undefined;
    this.validState = {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
    return this.validState;
  }

  isValidEmail(value: string): ValidatorResponse {
    let valid = /\S+@\S+\.\S+/.test(value);
    this.validState = {
      valid,
      message: valid ? 'OK' : 'Please enter a valid email address.'
    }
    return this.validState;
  }

  isValidPassword(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    console.log(owasp.test(value));
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  valuesMatch(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }
}
