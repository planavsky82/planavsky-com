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
  open(display: boolean) {
    this.display = display;
  }

  close() {
    this.display = false;
    this.closed.emit(true);
  }

  render() {
    return (
      <Host>
        <div onClick={this.close.bind(this)}
          class={{
            'opened': this.display,
            'closed': !this.display,
            'overlay': true
          }}></div>
        <div class={{
            'opened': this.display,
            'closed': !this.display,
            'modal': true
          }}>
          <div>
            <slot></slot>
            <div class="close" onClick={this.close.bind(this)}>&#x2715;</div>
          </div>
        </div>
      </Host>
    );
  }

}
