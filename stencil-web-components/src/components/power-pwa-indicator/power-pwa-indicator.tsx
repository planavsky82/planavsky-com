import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { iOS } from '../../utils/client';

@Component({
  tag: 'power-pwa-indicator',
  styleUrl: 'power-pwa-indicator.css',
  shadow: true,
})
export class PowerPwaIndicator implements ComponentInterface {

  constructor() {}

  render() {
    return (
      <Host class={{
        'display': iOS()
      }}>
        <div class="container">
          CLICK
          <div class="close">&times;</div>
        </div>
        <div class="pointer"></div>
        <slot></slot>
      </Host>
    );
  }

}
