import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children?: ReactChild | ReactChild[];
}

export const Container = (props: ContainerProps): JSX.Element => (
  <ContainerBox>{props.children}</ContainerBox>
);

export const ContainerBox = styled.div``;
