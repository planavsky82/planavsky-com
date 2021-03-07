import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

export interface SignUpEvent {
  email: string;
  pwd1: string;
  pwd2: string;
}

@Component({
  tag: 'power-signup',
  styleUrl: 'power-signup.css',
  shadow: true,
})
export class PowerSignup implements ComponentInterface {
  @Prop() labelEmailAddress: string = "Email Address";
  @Prop() labelPassword1: string = "Password";
  @Prop() labelPassword2: string = "Re-Enter Password";

  @Event() submitSignup: EventEmitter<SignUpEvent>;

  @State() email: string;
  @State() pwd1: string;
  @State() pwd2: string;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.submitSignup.emit({
      email: this.email,
      pwd1: this.pwd1,
      pwd2: this.pwd2
    });
  }

  handleEmailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  handlePwd1Change(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pwd1 = target.value;
  }

  handlePwd2Change(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pwd2 = target.value;
  }

  render() {
    return (
      <Host>
        <div class="header">
          <slot></slot>
        </div>

        <form>
          <label htmlFor="email">{this.labelEmailAddress}:</label>
          <input type="text" value="" name="email" onInput={(event) => this.handleEmailChange(event)}></input>
          <label htmlFor="pwd1">{this.labelPassword1}:</label>
          <input type="password" value="" name="pwd1" onInput={(event) => this.handlePwd1Change(event)}></input>
          <label htmlFor="pwd2">{this.labelPassword2}:</label>
          <input type="password" value="" name="pwd2" onInput={(event) => this.handlePwd2Change(event)}></input>
        </form>

        <power-button type="submit" onClick={(event) => this.handleSubmit(event)}>Sign Up</power-button>
        <slot name="footer"></slot>
      </Host>
    );
  }
}
