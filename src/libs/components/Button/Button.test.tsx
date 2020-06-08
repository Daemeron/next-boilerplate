import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from './Button';

describe('Button', () => {
  test('matches snapshot', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
});
