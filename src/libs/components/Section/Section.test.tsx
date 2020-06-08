import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Section } from './Section';

describe('Section', () => {
  test('matches snapshot', () => {
    const section = render(<Section>test</Section>);
    expect(section.container).toMatchSnapshot();
  });

  test('renders single child', () => {
    const section = render(<Section>test</Section>);
    expect(section.queryByText('test')).toBeTruthy();
  });

  test('renders multiple children', () => {
    const section = render(
      <Section>
        <p>test</p>
        <p>test</p>
      </Section>
    );
    expect(section.queryAllByText('test').length).toEqual(2);
  });
});
