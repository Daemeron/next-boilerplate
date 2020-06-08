import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface HeadlineProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactChild | ReactChild[];
}

export const Headline = (props: HeadlineProps): JSX.Element => (
  <GenricHeadline as={props.tag ? props.tag : 'h6'}>{props.children}</GenricHeadline>
);

export const GenricHeadline = styled.h1``;
