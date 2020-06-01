import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { ThemePropsInterface } from '@website/core';

interface SectionProps {
  children?: ReactChild | ReactChild[];
}

export const Section = (props: SectionProps): JSX.Element => <SectionBox>{props.children}</SectionBox>;

export const SectionBox = styled.div<ThemePropsInterface>`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    padding: 3rem 0;
  }
`;
