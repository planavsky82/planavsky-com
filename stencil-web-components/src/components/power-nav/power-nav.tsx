import { Component, ComponentInterface, Prop, Host, h, EventEmitter, Event, State } from '@stencil/core';
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

  @Event() selectItem: EventEmitter<NavigationItem>;

  @State() selectedRoute: string = '';

  constructor() {
    this.selectedRoute = this.data[0].route;
  }

  private handleClick(navigationItem: NavigationItem) {
    this.selectedRoute = navigationItem.route;
    this.selectItem.emit(navigationItem);
  }

  render() {
    return (
      <Host>
        {this.data.map((item: NavigationItem) =>
          <a onClick={() => this.handleClick(item)}
             class={{
               'selected': this.selectedRoute === item.route
             }}>{item.name}</a>
        )}
      </Host>
    );
  }

}
