import { newSpecPage } from '@stencil/core/testing';
import { PowerLogin } from './power-login';

describe('power-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerLogin],
      html: `<power-login></power-login>`,
    });
    expect(page.root).toEqualHtml(`
      <power-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-login>
    `);
  });
});
