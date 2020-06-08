import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Normalize } from './Normalize';

describe('Normalize', () => {
  test('matches snapshot', () => {
    const normalize = render(<Normalize />);
    expect(normalize.container).toMatchSnapshot();
  });
});
