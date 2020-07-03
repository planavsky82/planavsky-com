import { newSpecPage } from '@stencil/core/testing';
import { PowerPwaIndicator } from './power-pwa-indicator';

describe('power-pwa-indicator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerPwaIndicator],
      html: `<power-pwa-indicator></power-pwa-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <power-pwa-indicator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-pwa-indicator>
    `);
  });
});
