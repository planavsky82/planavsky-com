import { newSpecPage } from '@stencil/core/testing';
import { PowerError } from './power-error';

describe('power-error', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerError],
      html: `<power-error></power-error>`,
    });
    expect(page.root).toEqualHtml(`
      <power-error>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-error>
    `);
  });
});
