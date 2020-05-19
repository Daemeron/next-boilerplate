import React, { ReactChild } from 'react';
import styled from 'styled-components';

import { ThemePropsInterface } from '../../core/theme/Theme';

interface ContainerProps {
  children?: ReactChild | ReactChild[];
  theme?: ThemePropsInterface;
}

export const Container = (props: ContainerProps): JSX.Element => (
  <ContainerBox theme={props.theme}>{props.children}</ContainerBox>
);

export const ContainerBox = styled.div<ThemePropsInterface>`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
    padding: 0 48px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 48px;
  }
`;
