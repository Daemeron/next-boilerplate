import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Content } from './Content';

describe('Content', () => {
  test('maches snapshot', () => {
    const content = render(<Content />);
    expect(content.container).toMatchSnapshot();
  });
});
