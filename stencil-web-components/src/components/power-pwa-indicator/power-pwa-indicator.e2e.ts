import { newE2EPage } from '@stencil/core/testing';

describe('power-pwa-indicator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<power-pwa-indicator></power-pwa-indicator>');

    const element = await page.find('power-pwa-indicator');
    expect(element).toHaveClass('hydrated');
  });
});
