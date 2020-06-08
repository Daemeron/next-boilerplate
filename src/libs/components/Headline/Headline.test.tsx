import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Headline } from './Headline';

describe('Headline', () => {
  test('matches snapshot', () => {
    const headline = render(<Headline>test</Headline>);
    expect(headline.container).toMatchSnapshot();
  });

  test('renders single child', () => {
    const headline = render(<Headline>test</Headline>);
    expect(headline.queryByText('test')).toBeTruthy();
  });

  test('renders multiple children', () => {
    const headline = render(
      <Headline>
        <span>test</span>
        <span>test</span>
      </Headline>
    );
    expect(headline.queryAllByText('test').length).toEqual(2);
  });
});
