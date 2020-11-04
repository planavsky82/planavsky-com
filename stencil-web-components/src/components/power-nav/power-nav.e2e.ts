import { newE2EPage } from '@stencil/core/testing';

describe('power-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-nav></power-nav>');

    const element = await page.find('power-nav');
    expect(element).toHaveClass('hydrated');
  });
});
