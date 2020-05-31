import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  UlFormConfig,
  UlFormFieldConfig,
  ReactiveFormServiceFieldValue,
  UlFormRelationships,
  UlFormRelationship
} from './form.model';

@Injectable()
export class FormUtilities {

  findDependency(str: string): string | string[] | undefined {
    if (str && str.search('{{') !== -1) {
      let count = str.split('{{').length - 1;
      if (count > 1) {
        let fields: string[] = [];
        for (let i = 0; i < count; i++) {
          fields.push(str.split('{{')[i + 1].split('}}')[0]);
        }
        return fields;
      } else {
        let dependentFieldName = str.split('{{')[1].split('}}')[0];
        return dependentFieldName;
      }
    }
  }

  getRelationships(config: UlFormConfig): UlFormRelationships {
    let relationships: UlFormRelationships = [];
    let dependentFields = config.filter((field) => {
      return field.rules || (field.url && field.url.match(/{{/g));
    });
    dependentFields.forEach((field) => {
      if (field.rules) {
        field.rules.forEach((rule) => {
          let provider = this.findDependency(rule.condition) as string;
          if (Array.isArray(provider)) {
            provider.forEach((prov) => {
              if (!this.isDuplicate(field, relationships, prov)) {
                relationships.push({
                  dependent: field.name,
                  provider: prov
                });
              }
            });
          } else {
            if (!this.isDuplicate(field, relationships, provider)) {
              relationships.push({
                dependent: field.name,
                provider: provider
              });
            }
          }
        });
      }
      if (field.url) {
        let provider = this.findDependency(field.url) as string;
        if (!this.isDuplicate(field, relationships, provider)) {
          relationships.push({
            dependent: field.name,
            provider: this.findDependency(field.url) as string
          });
        }
      }
    });
    return relationships;
  }

  isDuplicate(field: UlFormFieldConfig, relationships: UlFormRelationships, provider: string) {
    return Boolean(relationships.find((relationship) => {
      return relationship.provider === provider && relationship.dependent === field.name;
    }));
  }

  parseStr(str: string, form: any, config: UlFormConfig): string {
    let fields = this.findDependency(str);
    if (form && form.controls) {
      if (Array.isArray(fields)) {
        fields.forEach((field) => {
          str = this.generateCondition(str, form, config, field);
        });
      } else {
        if (fields) {
          str = this.generateCondition(str, form, config, fields);
        }
      }
    }
    return str;
  }

  generateCondition(str: string, form: any, config: UlFormConfig, field: string): string {
    let configField: UlFormFieldConfig = config.filter((fld) => {
      return fld.name === field;
    })[0];
    let fieldValue: ReactiveFormServiceFieldValue = {
      name: field,
      value: form.controls[field].value
    };
    let val = this.mapValues(configField, fieldValue);
    if (typeof val === 'string') {
      val = '"' + val + '"';
    }
    let dependency = '{{' + field + '}}';
    return str.replace(dependency, val);
  }

  mapValues(c: UlFormFieldConfig, field: ReactiveFormServiceFieldValue): any {
    switch (c.type) {
      // option
      case 'textbox': { // select
        return field.value ? field.value.value : undefined;
      }

      // default
      default: {
        return field.value;
      }

    }
  }

}
