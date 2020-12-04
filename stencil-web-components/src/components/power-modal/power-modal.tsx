import { Component, ComponentInterface, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'power-modal',
  styleUrl: 'power-modal.css',
  shadow: true,
})
export class PowerModal implements ComponentInterface {
  @Prop() opened: boolean = false;

  @State() display: boolean = false;

  @Watch('opened')
  open() {
    console.log('9999999');
    this.display = true;
  }

  close() {
    this.display = false;
  }

  render() {
    return (
      <Host class={{
        'open': this.display,
        'closed': !this.display
      }}>
        <div class="overlay" onClick={this.close.bind(this)}></div>
        <div class="modal">
          <div>
            <slot></slot>
          </div>
          <div class="close" onClick={this.close.bind(this)}>&#x2715;</div>
        </div>
      </Host>
    );
  }

}
