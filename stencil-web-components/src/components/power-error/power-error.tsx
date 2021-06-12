import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-error',
  styleUrl: 'power-error.css',
  shadow: true,
})
export class PowerError implements ComponentInterface {
  @Prop() inline: boolean = false;

  render() {
    return (
      <Host role="alert"
        class={{
          'local': this.inline,
          'global': !this.inline
        }}>
        <slot></slot>
      </Host>
    );
  }

}
