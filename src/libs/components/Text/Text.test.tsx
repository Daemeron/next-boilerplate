import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Text } from './Text';

describe('Paragraph', () => {
  test('matches the snapshot', () => {
    const paragraph = render(<Text>test</Text>);
    expect(paragraph.container).toMatchSnapshot();
  });
});
