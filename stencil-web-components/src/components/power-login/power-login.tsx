import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

export interface LoginEvent {
  email: string;
  pwd: string;
}

@Component({
  tag: 'power-login',
  styleUrl: 'power-login.css',
  shadow: true,
})
export class PowerLogin implements ComponentInterface {
  @Prop() labelEmailAddress: string = "Email Address";
  @Prop() labelPassword: string = "Password";

  @Event() submitLogin: EventEmitter<LoginEvent>;

  @State() email: string;
  @State() pwd: string;

  constructor() {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.submitLogin.emit({
      email: this.email,
      pwd: this.pwd
    });
  }

  handleEmailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  handlePwdChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pwd = target.value;
  }

  render() {
    return (
      <Host>
        <div class="header">
          <slot></slot>
        </div>

        <div class="error">
          <slot name="error"></slot>
        </div>

        <form>
          <label htmlFor="email">{this.labelEmailAddress}:</label>
          <input type="text" name="email" value={this.email} onInput={(event) => this.handleEmailChange(event)}></input>
          <label htmlFor="pwd">{this.labelPassword}:</label>
          <input type="password" name="pwd" onInput={(event) => this.handlePwdChange(event)}></input>

          <power-button type="submit" onClick={(event) => this.handleSubmit(event)}>Login</power-button>
        </form>

        <div class="signup">
          <slot name="signup"></slot>
        </div>
      </Host>
    );
  }

}
