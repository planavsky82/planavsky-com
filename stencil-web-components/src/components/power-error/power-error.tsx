import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'power-error',
  styleUrl: 'power-error.css',
  shadow: true,
})
export class PowerError implements ComponentInterface {

  render() {
    return (
      <Host role="alert">
        <slot></slot>
      </Host>
    );
  }

}
