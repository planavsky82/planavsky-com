import { Component, ComponentInterface, Prop, Host, h, EventEmitter, Event } from '@stencil/core';
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

  private _selected: string = '';

  constructor() {
    this.selectedItem = this.data[0].route;
  }

  set selectedItem(route: string) {
    this._selected = route;
  }

  get selectedItem(): string {
    return this._selected;
  }

  private handleClick(navigationItem: NavigationItem) {
    this.selectedItem = navigationItem.route;
    this.selectItem.emit(navigationItem);
    console.log(this.selectedItem);
  }

  render() {
    return (
      <Host>
        {this.data.map((item: NavigationItem) =>
          <a onClick={() => this.handleClick(item)}>{item.name}</a>
          // class={this.isSelected(item.route) ? 'selected' : ''}
        )}
      </Host>
    );
  }

}
