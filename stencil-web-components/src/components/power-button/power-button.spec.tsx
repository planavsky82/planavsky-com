import { newSpecPage } from '@stencil/core/testing';
import { PowerButton } from './power-button';

describe('power-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerButton],
      html: `<power-button></power-button>`,
    });
    expect(page.root).toEqualHtml(`
      <power-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-button>
    `);
  });
});
