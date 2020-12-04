import { newE2EPage } from '@stencil/core/testing';

describe('power-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-modal></power-modal>');

    const element = await page.find('power-modal');
    expect(element).toHaveClass('hydrated');
  });
});
