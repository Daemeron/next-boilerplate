import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Anchor } from './Anchor';

describe('Link', () => {
  test('matches snapshot', () => {
    const anchor = render(<Anchor>test</Anchor>);
    expect(anchor.container).toMatchSnapshot();
  });
});
