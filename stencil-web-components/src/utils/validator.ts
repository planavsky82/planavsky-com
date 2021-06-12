export interface ValidatorResponse {
  valid: boolean;
  message: string;
}

export class Validator {
  constructor() {}

  hasValue(value: string): ValidatorResponse {
    let valid = value !== '' && value !== undefined;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  isValidEmail(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  isValidPassword(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  passwordsMatch(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }

  emailAddressesMatch(value: string): ValidatorResponse {
    console.log(value);
    let valid = true;
    return {
      valid,
      message: valid ? 'OK' : 'This field is required.'
    }
  }
}
