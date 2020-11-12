import { Component, ComponentInterface, Prop, Host, h } from '@stencil/core';
import { Navigation, NavigationItem } from '@models/navigation';

@Component({
  tag: 'power-nav',
  styleUrls: [
    'power-nav.css',
    '../../assets/font-awesome/css/font-awesome.css'
  ],
  shadow: true,
})
export class PowerNav implements ComponentInterface {
  @Prop() data: Navigation;

  render() {
    return (
      <Host>
        {this.data.map((item: NavigationItem) =>
          <div>
            <div>{item.name}</div>
            <div>{item.route}</div>
            <i class={'fa fa-' + item.icon}></i>
          </div>
        )}
      </Host>
    );
  }

}
