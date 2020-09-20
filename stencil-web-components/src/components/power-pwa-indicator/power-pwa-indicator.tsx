import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { iOS } from '../../utils/client';

@Component({
  tag: 'power-pwa-indicator',
  styleUrl: 'power-pwa-indicator.css',
  shadow: true,
})
export class PowerPwaIndicator implements ComponentInterface {
  @Prop() display: boolean = iOS();

  constructor() {}

  handleClick(event: UIEvent) {
    console.log(event);
    this.display = false;
  }

  render() {
    return (
      <Host class={{
        'display': this.display
      }}>
        <div class="container">
          CLICK
          <div class="close" onClick={this.handleClick.bind(this)}>&times;</div>
        </div>
        <div class="pointer"></div>
        <slot></slot>
      </Host>
    );
  }

}
