import { ValidatorFn, Validators } from '@angular/forms';
// custom validators
import { forbiddenStringValidator } from '../textbox';

export const VALIDATOR_MAP: { [key: string]: any } = {
  min: Validators.min,
  minLength: Validators.minLength,
  max: Validators.max,
  maxLength: Validators.maxLength,
  required: Validators.required,
  forbiddenString: forbiddenStringValidator
};
