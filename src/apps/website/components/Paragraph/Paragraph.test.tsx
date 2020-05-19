import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  test('matches the snapshot', () => {
    const paragraph = render(<Paragraph>test</Paragraph>);
    expect(paragraph.container).toMatchSnapshot();
  });
  test('sets font size and line-height', () => {
    const paragraph = render(<Paragraph />);
    expect(paragraph.container.firstChild).toHaveStyleRule('font-size', '1rem');
    expect(paragraph.container.firstChild).toHaveStyleRule('line-height', '1.4rem');
  });
});
