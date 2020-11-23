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

  private selected: string = '';

  private handleClick(event: any) {
    console.log(event);
  }

  render() {
    return (
      <Host>
        {this.data.map((item: NavigationItem) =>
          <a href={'/' + item.route}
             onClick={this.handleClick.bind(this)}
             class={this.selected}>{item.name}</a>
        )}
      </Host>
    );
  }

}
