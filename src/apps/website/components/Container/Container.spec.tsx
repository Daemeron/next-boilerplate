import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Container } from './Container';

describe('Container [style=default]', () => {
  test('matches the snapshot', () => {
    const container = render(<Container />);
    expect(container.container).toMatchSnapshot();
  });
  test('contains initial max-width and auto margins', () => {
    const container = render(<Container />);
    expect(container.container.firstChild).toHaveStyleRule('max-width', '100%');
    expect(container.container.firstChild).toHaveStyleRule('margin', '0 auto');
    expect(container.container.firstChild).toHaveStyleRule('max-width', '1200px', {
      media: '(min-width: 1200px)',
    });
  });
  test('contains responsive max-width', () => {
    const container = render(<Container theme={{ theme: { style: 'dark' } }} />);
    expect(container.container.firstChild).toHaveStyleRule('max-width', '576px', {
      media: '(min-width: 576px)',
    });
    expect(container.container.firstChild).toHaveStyleRule('max-width', '768px', {
      media: '(min-width: 768px)',
    });
    expect(container.container.firstChild).toHaveStyleRule('max-width', '992px', {
      media: '(min-width: 992px)',
    });
    expect(container.container.firstChild).toHaveStyleRule('max-width', '1200px', {
      media: '(min-width: 1200px)',
    });
  });
});
