import { newE2EPage } from '@stencil/core/testing';

describe('power-error', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-error></power-error>');

    const element = await page.find('power-error');
    expect(element).toHaveClass('hydrated');
  });
});
