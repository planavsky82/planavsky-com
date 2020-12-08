import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'power-login',
  styleUrl: 'power-login.css',
  shadow: true,
})
export class PowerLogin implements ComponentInterface {
  constructor() {
    console.log('login');
  }

  render() {
    return (
      <Host>
        <slot></slot>

        <label>Username:</label>
        <input type="text" value="" name="username"></input>
        <label>Password:</label>
        <input type="password" value="" name="pwd"></input>
      </Host>
    );
  }

}
