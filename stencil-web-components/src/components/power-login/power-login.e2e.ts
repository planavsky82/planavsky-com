import { newE2EPage } from '@stencil/core/testing';

describe('power-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-login></power-login>');

    const element = await page.find('power-login');
    expect(element).toHaveClass('hydrated');
  });
});
