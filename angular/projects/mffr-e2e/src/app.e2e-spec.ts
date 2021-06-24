import { AppPage } from './app.po';
import { by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display intro message', () => {
    page.navigateTo();
    expect(page.getIntroText()).toEqual('Want to Manage Your Own Fantasy Football Rankings? Find Out How!');
  });

  it('should allow the user to get to the sign up page through the intro modal', () => {
    page.navigateTo();
    element(by.css('div.intro a')).click();
    expect(element(by.css('power-modal a')).getText()).toEqual('Sign Up');
    element(by.css('power-modal a')).click();
  });

  it('should allow the user to log in', () => {
    page.navigateTo('login');
    // need to access shadow root of power-login
  });
});
