import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Footer } from './Footer';

describe('Footer', () => {
  test('matches snapshot', () => {
    const footer = render(<Footer />);
    expect(footer.container).toMatchSnapshot();
  });
});
