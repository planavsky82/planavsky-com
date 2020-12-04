import { Component, ComponentInterface, Host, h, Prop, Watch, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'power-modal',
  styleUrl: 'power-modal.css',
  shadow: true,
})
export class PowerModal implements ComponentInterface {
  @Prop() opened: boolean = false;
  @Event() closed: EventEmitter<boolean>;

  @State() display: boolean = false;

  @Watch('opened')
  open() {
    console.log('9999999');
    this.display = true;
  }

  close() {
    this.display = false;
    this.closed.emit(true);
  }

  render() {
    return (
      <Host class={{
        'opened': this.display,
        'closed': !this.display
      }}>
        <div class="overlay" onClick={this.close.bind(this)}></div>
        <div class={{
            'opened': this.display,
            'closed': !this.display,
            'modal': true
          }}>
          <div>
            <slot></slot>
          </div>
          <div class="close" onClick={this.close.bind(this)}>&#x2715;</div>
        </div>
      </Host>
    );
  }

}
