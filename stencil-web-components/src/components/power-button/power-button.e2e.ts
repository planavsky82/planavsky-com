import { newE2EPage } from '@stencil/core/testing';

describe('power-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-button></power-button>');

    const element = await page.find('power-button');
    expect(element).toHaveClass('hydrated');
  });
});
