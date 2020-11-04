import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';
import { Navigation } from '@models/navigation';

@Component({
  tag: 'power-nav',
  styleUrl: 'power-nav.css',
  shadow: true,
})
export class PowerNav implements ComponentInterface {
  @Prop() data: Navigation;

  render() {
    return (
      <Host>
        nav
        <slot></slot>
      </Host>
    );
  }

}
