import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { forbiddenStringValidator } from '../../../../ultimate-list/src/lib/textbox';
import { UlFormConfig, SAMPLE_CONFIG } from '../../../../ultimate-list/src/lib/form';

@Component({
  selector: 'ultimate-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = true;

  public options = [
  	{ 
  	  name: 'Option 1',
  	  value: 1 
  	},
  	{ 
  	  name: 'Option 2',
  	  value: 2 
  	},
  	{ 
  	  name: 'Option 3',
  	  value: 3 
  	},
  	{ 
  	  name: 'Option 4',
  	  value: 4
  	},
  	{ 
  	  name: 'Option 5',
  	  value: 5 
  	}
  ];
  
  public config = SAMPLE_CONFIG;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['sample value', [
        Validators.required,
        Validators.minLength(4),
        forbiddenStringValidator(/code/i)
      ]],
      options: [2, [
        Validators.required
      ]]
    });
    this.form.valueChanges.subscribe(val => {
      console.log(this.form.controls['name']);
      console.log(this.form.controls['name'].status);
      console.log(this.form.controls['options']);
      console.log(this.form.controls['options'].status);
    });
  }
  
  handleSubmit($event: Event) {
    console.log(this.form);
  }

  loaded() {
    this.loading = false;
  }

  formChangeEvent(event: Event) {
    console.log(event)
  }

  submit($event: Event) {
    console.log($event);
  }

}
