import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { GlobalStyle } from './GlobalStyle';

describe('GlobalStyle', () => {
  test('matches snapshot', () => {
    const globalStyle = render(<GlobalStyle />);
    expect(globalStyle.container).toMatchSnapshot();
  });
});
