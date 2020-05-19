import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Section } from './Section';

describe('Section', () => {
  test('matches snapshot', () => {
    const section = render(<Section>test</Section>);
    expect(section.container).toMatchSnapshot();
  });

  test('sets initial padding', () => {
    const section = render(<Section>test</Section>);
    expect(section.container.firstChild).toHaveStyleRule('padding', '1rem 0');
  });

  test('sets responsive padding', () => {
    const section = render(<Section>test</Section>);
    expect(section.container.firstChild).toHaveStyleRule('padding', '2rem 0', {
      media: '(min-width: 768px)',
    });
    expect(section.container.firstChild).toHaveStyleRule('padding', '3rem 0', {
      media: '(min-width: 992px)',
    });
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
