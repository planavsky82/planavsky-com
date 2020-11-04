import { newSpecPage } from '@stencil/core/testing';
import { PowerNav } from './power-nav';

describe('power-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerNav],
      html: `<power-nav></power-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <power-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-nav>
    `);
  });
});
