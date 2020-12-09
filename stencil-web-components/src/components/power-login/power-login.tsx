import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-login',
  styleUrl: 'power-login.css',
  shadow: true,
})
export class PowerLogin implements ComponentInterface {
  @Prop() labelUserName: string = "Email Address";
  @Prop() labelPassword: string = "Password";

  constructor() {
    console.log('login');
  }

  render() {
    return (
      <Host>
        <div class="header">
          <slot></slot>
        </div>

        <label>{this.labelUserName}:</label>
        <input type="text" value="" name="username"></input>
        <label>{this.labelPassword}:</label>
        <input type="password" value="" name="pwd"></input>

        <div class="signup">
          <slot name="signup"></slot>
        </div>
      </Host>
    );
  }

}
