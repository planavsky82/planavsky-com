import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Content: {{ info }}</p>
  `,
  styles: [`

  `]
})
export class SampleComponent {
  @Input() info: string = 'llll';
}