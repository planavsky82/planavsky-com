import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'power-read-more',
  styleUrl: 'power-read-more.css',
  shadow: true,
})
export class PowerReadMore implements ComponentInterface {
  @State() action: 'Read More' | 'Close' = 'Read More';
  private open: boolean = false;

  private toggle(): void {
    this.open = !this.open;
    if (this.open) {
      this.action = 'Close';
    } else {
      this.action = 'Read More';
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <a onClick={() => this.toggle()}>{this.action}</a>
      </Host>
    );
  }

}
