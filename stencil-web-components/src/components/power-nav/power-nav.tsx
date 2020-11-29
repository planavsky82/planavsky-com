import { Component, ComponentInterface, Prop, Host, h, EventEmitter, Event, State, Listen } from '@stencil/core';
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

  @State() focusedItem: NavigationItem;
  @State() selectedIndex: number = 0;

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'Enter'){
      this.select(this.selectedIndex);
    }
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight'){
      let newIndex = this.selectedIndex + 1;
      if (newIndex < this.data.length) {
        this.selectedIndex = newIndex;
      }
    }
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft'){
      let newIndex = this.selectedIndex - 1;
      if (newIndex > -1) {
        this.selectedIndex = newIndex;
      }
    }
  }

  private select(index: number) {
    this.selectedIndex = index;
    this.selectItem.emit(this.data[index]);
  }

  render() {
    return (
      <Host role="navigation" aria-label="Site Navigation">
        <ul tabindex="0">
          {this.data.map((item: NavigationItem, index: number) =>
            <li>
              <a onClick={() => this.select(index)}
                 aria-selected={this.selectedIndex === index}
                 aria-label={item.name}
                 class={{
                  'selected': this.selectedIndex === index
                 }}>{item.name}</a>
            </li>
          )}
        </ul>
      </Host>
    );
  }

}