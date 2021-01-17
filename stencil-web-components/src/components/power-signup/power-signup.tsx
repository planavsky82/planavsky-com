import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'power-signup',
  styleUrl: 'power-signup.css',
  shadow: true,
})
export class PowerSignup implements ComponentInterface {
  @Prop() labelEmailAddress: string = "Email Address";
  @Prop() labelPassword1: string = "Password";
  @Prop() labelPassword2: string = "Re-Enter Password";

  render() {
    return (
      <Host>
        <div class="header">
          <slot></slot>
        </div>

        <label htmlFor="email">{this.labelEmailAddress}:</label>
        <input type="text" value="" name="email"></input>
        <label htmlFor="pwd1">{this.labelPassword1}:</label>
        <input type="password" value="" name="pwd1"></input>
        <label htmlFor="pwd2">{this.labelPassword2}:</label>
        <input type="password" value="" name="pwd2"></input>
        <slot></slot>
      </Host>
    );
  }

}
