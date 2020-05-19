import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Headline } from './Headline';

describe('Headline', () => {
  test('matches snapshot', () => {
    const headline = render(<Headline>test</Headline>);
    expect(headline.container).toMatchSnapshot();
  });

  test('sets initial font-size and line-height', () => {
    const headline = render(<Headline>test</Headline>);
    expect(headline.container.firstChild).toHaveStyleRule('font-size', '2rem');
    expect(headline.container.firstChild).toHaveStyleRule('line-height', '2.4rem');
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
