import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Header } from './Header';

describe('Header', () => {
  test('matches snapshot', () => {
    const header = render(<Header />);
    expect(header.container).toMatchSnapshot();
  });
});
