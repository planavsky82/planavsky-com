import { newE2EPage } from '@stencil/core/testing';

describe('power-read-more', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-read-more></power-read-more>');

    const element = await page.find('power-read-more');
    expect(element).toHaveClass('hydrated');
  });
});
