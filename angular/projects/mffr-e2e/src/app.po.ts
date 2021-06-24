import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route?) {
    if (!route) {
      route = '';
    }
    return browser.get('/' + route);
  }

  getIntroText() {
    return element(by.css('div.intro')).getText();
  }
}
