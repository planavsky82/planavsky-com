import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-button',
  styleUrl: 'power-button.css',
  shadow: true,
})
export class PowerButton implements ComponentInterface {
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <Host>
        <button type={this.type}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
