import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'power-pwa-indicator',
  styleUrl: 'power-pwa-indicator.css',
  shadow: true,
})
export class PowerPwaIndicator implements ComponentInterface {

  constructor() {

  }

  isEnabled(): boolean {
    return !(window.matchMedia('(display-mode: standalone)').matches)
      || ((window.navigator as any).standalone)
      || document.referrer.includes('android-app://')
  }

  render() {
    return (
      <Host class={{
        'display': this.isEnabled()
      }}>
        Power PWA Indicator
        <slot></slot>
      </Host>
    );
  }

}
