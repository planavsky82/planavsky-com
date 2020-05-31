import { UlFormConfig } from './form.model';

export const SAMPLE_CONFIG: UlFormConfig = [
  {
    type: 'textbox',
    name: 'textbox',
    label: 'Text Field',
    value: 'sample text',
    placeholder: 'Enter your name',
    validation: [
      'required',
      { minLength: 3 },
      { maxLength: 10 }
    ],
    validationMessages: [
      '{{label}} is required.',
      '{{label}} should be at least 3 characters.',
      '{{label}} should be no more than 10 characters.'
    ]
  },
  {
    type: 'select',
    name: 'select',
    label: 'Select Field',
    value: 2,
    placeholder: 'Select an Option',
    options: [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
    ]
  },
  {
    type: 'button',
    name: 'submit',
    label: 'Submit'
  }
];