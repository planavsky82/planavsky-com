import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { Validator } from '../../utils/validator';

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

  private validator: Validator = new Validator();

  public emailErrorMessage: string;
  public pwd1ErrorMessage: string;
  public pwd2ErrorMessage: string;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.submitSignup.emit({
      email: this.email,
      pwd1: this.pwd1,
      pwd2: this.pwd2
    });
  }

  handleEmailChange(event: Event) {
    this.emailErrorMessage = undefined;
    const target = event.target as HTMLInputElement;
    this.email = target.value;
    let value = this.validator.hasValue(this.email);
    if (value.valid) {
      value = this.validator.isValidEmail(this.email);
    }
    if (!value.valid) {
      this.emailErrorMessage = value.message;
    }
  }

  handlePwd1Change(event: Event) {
    this.pwd1ErrorMessage = undefined;
    const target = event.target as HTMLInputElement;
    this.pwd1 = target.value;
    let value = this.validator.hasValue(this.pwd1);
    if (value.valid) {
      value = this.validator.isValidPassword(this.pwd1);
    }
    if (!value.valid) {
      this.pwd1ErrorMessage = value.message;
    }
  }

  handlePwd2Change(event: Event) {
    this.pwd2ErrorMessage = undefined;
    const target = event.target as HTMLInputElement;
    this.pwd2 = target.value;
    let value = this.validator.hasValue(this.pwd2);
    if (value.valid) {
      value = this.validator.isValidPassword(this.pwd2);
    }
    if (!value.valid) {
      this.pwd2ErrorMessage = value.message;
    }
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
