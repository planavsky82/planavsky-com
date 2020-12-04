import { newSpecPage } from '@stencil/core/testing';
import { PowerModal } from './power-modal';

describe('power-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerModal],
      html: `<power-modal></power-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <power-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-modal>
    `);
  });
});
