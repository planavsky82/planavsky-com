import { Component, ComponentInterface, Host, h, Prop, getAssetPath } from '@stencil/core';
import { iOS, isIPad } from '../../utils/client';

@Component({
  tag: 'power-pwa-indicator',
  styleUrl: 'power-pwa-indicator.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class PowerPwaIndicator implements ComponentInterface {
  @Prop() display: boolean = iOS();
  @Prop() image = "Navigation_Action_2x.png";

  private isIPad: boolean = isIPad();

  constructor() {}

  handleClick(event: UIEvent) {
    console.log(event);
    this.display = false;
  }

  render() {
    return (
      <Host class={{
        'display': this.display,
        'ipad': this.isIPad
      }}>
        <div class="container">
          CLICK <div class="action-icon"></div>
          <img src={getAssetPath(`./assets/${this.image}`)} />
          <div class="close" onClick={this.handleClick.bind(this)}>&times;</div>
        </div>
        <div class="pointer"></div>
        <slot></slot>
      </Host>
    );
  }

}
