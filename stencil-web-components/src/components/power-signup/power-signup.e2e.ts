import { newE2EPage } from '@stencil/core/testing';

describe('power-signup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-signup></power-signup>');

    const element = await page.find('power-signup');
    expect(element).toHaveClass('hydrated');
  });
});
