import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-login',
  styleUrl: 'power-login.css',
  shadow: true,
})
export class PowerLogin implements ComponentInterface {
  @Prop() labelEmailAddress: string = "Email Address";
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

        <label htmlFor="email">{this.labelEmailAddress}:</label>
        <input type="text" value="" name="email"></input>
        <label htmlFor="pwd">{this.labelPassword}:</label>
        <input type="password" value="" name="pwd"></input>

        <power-button type="submit">Login</power-button>

        <div class="signup">
          <slot name="signup"></slot>
        </div>
      </Host>
    );
  }

}
