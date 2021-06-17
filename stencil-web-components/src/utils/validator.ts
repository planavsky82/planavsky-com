//import * as owasp from 'owasp-password-strength-test';

export interface ValidatorResponse {
  valid: boolean;
  message: string;
}

export class Validator {
  private validState: ValidatorResponse = {
    valid: true,
    message: 'OK'
  };

  constructor() {
    //console.log(owasp.test('12345'));
  }

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
    let valid = true;
    console.log(value);
    /* const passwordResult = owasp.test(value);
    if (passwordResult.errors.length === 0) {

    } */
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  valuesMatch(value1: string, value2: string): ValidatorResponse {
    let valid = value1 === value2;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }
}
