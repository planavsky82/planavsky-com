import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-login',
  styleUrl: 'power-login.css',
  shadow: true,
})
export class PowerLogin implements ComponentInterface {
  @Prop() labelUserName: string = "Username / Email Address";
  @Prop() labelPassword: string = "Password";

  constructor() {
    console.log('login');
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <label>{this.labelUserName}:</label>
        <input type="text" value="" name="username"></input>
        <label>{this.labelPassword}:</label>
        <input type="password" value="" name="pwd"></input>
      </Host>
    );
  }

}
