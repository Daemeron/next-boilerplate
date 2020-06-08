import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Container } from './Container';

describe('Container [style=default]', () => {
  test('matches the snapshot', () => {
    const container = render(<Container />);
    expect(container.container).toMatchSnapshot();
  });
});
