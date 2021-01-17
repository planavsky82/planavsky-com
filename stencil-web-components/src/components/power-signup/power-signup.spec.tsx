import { newSpecPage } from '@stencil/core/testing';
import { PowerSignup } from './power-signup';

describe('power-signup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PowerSignup],
      html: `<power-signup></power-signup>`,
    });
    expect(page.root).toEqualHtml(`
      <power-signup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </power-signup>
    `);
  });
});
