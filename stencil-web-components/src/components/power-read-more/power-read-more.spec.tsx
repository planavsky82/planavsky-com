import { newSpecPage } from '@stencil/core/testing';
import { PowerReadMore } from './power-read-more';

describe('power-read-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerReadMore],
      html: `<power-read-more></power-read-more>`,
    });
    expect(page.root).toEqualHtml(`
      <power-read-more>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-read-more>
    `);
  });
});
