// GENERATES THE DYNAMIC COMPONENTS

import {
  Directive, OnInit, OnChanges, DoCheck, SimpleChanges, Input, Output,
  EventEmitter, ComponentFactoryResolver, ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  UlFormFieldConfig,
  UlFormFieldInputs,
  UlFormFieldChangeResponse,
  ReactiveFormServiceFieldValue,
  UlFormUIState,
  UlFormFieldState
} from './form.model';
import { FormService } from './form.service';
import { FormUtilities } from './form.utilities';
import { Subscription } from 'rxjs';

import { TextboxComponent } from '../textbox';
import { DropdownComponent } from '../dropdown';
import { ButtonComponent } from '../button';

export const COMPONENTS: any = {
  textbox: TextboxComponent,
  select: DropdownComponent,
  button: ButtonComponent
};

@Directive({
  selector: '[ulFormField]'
})
export class FormFieldDirective implements OnInit, OnChanges, DoCheck {
  @Input() config: UlFormFieldConfig;
  @Input() group: FormGroup;
  @Input() form: any;
  @Input() index: number;
  @Input() totalFields: number;

  @Output() formFieldLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  public component: any;
  public subscriber: Subscription;
  public subscriberChange: Subscription;
  public uiStateSubscriber: Subscription;
  public dependencyValue: any;
  public lastUrl: string;
  public state: UlFormFieldState;
  public lastValue: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private formService: FormService,
    private utilities: FormUtilities
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.component &&
      changes.group.previousValue &&
      changes.group.previousValue.value) {

      this.component.destroy();
      this.generateComponent();
    }
  }

  ngDoCheck() {
    if (this.component && this.component._component) {
      let name = this.component._component.metaConfig.name;
      let value = this.component._component.value;
      if (this.lastValue !== value) {
        this.formService.update({ name: name, value: value });
      }
      this.lastValue = value;
    }
  }

  ngOnInit() {
    this.subscriber = this.formService.fieldValue$.subscribe(this.fieldHandler.bind(this));
    this.uiStateSubscriber = this.formService.uiState$.subscribe(this.uiStateHandler.bind(this));
    if (this.config.url) {
      this.subscriberChange = this.formService.fieldChange$.subscribe(this.fieldChange.bind(this));
      this.setUrlData(this.config.url);
    }

    setTimeout(() => {
      this.generateComponent();
    });
  }

  fieldHandler(field: ReactiveFormServiceFieldValue) {
    // call setData observable function with new URL based on dependent value
    if (this.config.url) {
      let dependency = this.utilities.findDependency(this.config.url);
      if (dependency && dependency === field.name && field.value) {
        this.dependencyValue = this.utilities.mapValues(this.config, field);
        this.setUrlData(this.config.url);
      }
    }
  }

  fieldChange(res: UlFormFieldChangeResponse) {
    if (res && res.name === this.config.name) {
      this.config.options = res.data;
      this.mapInputs(this.config);
      this.generateInputs();
    }
  }

  uiStateHandler(state: UlFormUIState) {
    this.state = state.filter((field) => {
      return field.name === this.config.name;
    })[0];
  }

  setUrlData(url: string) {
    if (this.evalURL(url)) {
      this.formService.setData({ name: this.config.name, url: this.evalURL(url), value: undefined });
    }
  }

  evalURL(url: string): string | undefined {
    if (this.utilities.findDependency(url)) {
      if (this.dependencyValue) {
        let dependency = '{{' + this.utilities.findDependency(url) + '}}';
        let dynUrl = url.replace(dependency, this.dependencyValue);
        if (this.lastUrl && this.lastUrl !== dynUrl) {
          // reset value if url changes
          this.resetValue();
        }
        this.lastUrl = dynUrl;

        return dynUrl;
      }
    } else {
      return url;
    }
  }

  resetValue() {
    this.config.value = undefined;
    this.component.instance.setValue = undefined;
    this.form.controls[this.config.name].setValue(undefined);
    this.form.controls[this.config.name].updateValueAndValidity({ onlySelf: true, emitEvent: true });
    this.form.controls[this.config.name].markAsTouched();
  }

  generateComponent() {
    let content: Node = document.createTextNode('');
    if (this.config.content) {
      content = document.createTextNode(this.config.content);
    }
    const component = COMPONENTS[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory, 0, undefined, [[content]]);
    this.component.instance.metaConfig = this.config;
    this.component.instance.formGroup = this.group;

    if (!this.config.inputs) {
      this.config.inputs = {};
    }
    this.mapInputs(this.config);
    this.generateInputs();

    // set observable with default values when the reactive form loads
    this.formService.update({
      name: this.component.instance.metaConfig.name,
      value: this.component.instance.value
    }, this.form);

    // check for last component to be loaded and emit event
    this.formFieldLoaded.emit(this.index === this.totalFields - 1);
  }

  generateInputs() {
    if (this.component && this.config.inputs) {
      Object.keys(this.config.inputs).map((input) => {
        if (this.config && this.config.inputs) {
          this.component.instance[input] = this.config.inputs[input];
        }
      });
    }
  }

  setInitValue(c: UlFormFieldConfig) {
    // init value
    if (c.value && this.component) {
      this.component.instance.setValue = { value: c.value };
    }
  }

  mapInputs(c: UlFormFieldConfig): void {
    let inputs: { [key: string]: any } = {};
    let type = this.config.type;

    if (type === 'textbox') {
      inputs = {
        value: c.value,
        placeholder: c.placeholder,
        disabled: !this.state.enable
      };
    } 

    if (type === 'select') {
      inputs = {
        value: c.value,
        placeholder: c.placeholder,
        disabled: !this.state.enable,
        options: c.options
      };
    } 

    if (type === 'button') {
      inputs = {
        value: c.label,
        placeholder: c.placeholder,
        disabled: !this.state.enable
      };
    } 

    if (this.config.inputs && inputs) {
      this.config.inputs = Object.assign(this.config.inputs, inputs);
    }
  }
}
