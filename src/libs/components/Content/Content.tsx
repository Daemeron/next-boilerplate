import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface ContentProps {
  children?: ReactChild | ReactChild[];
}

export const Content = (props: ContentProps): JSX.Element => <ContentBox>{props.children}</ContentBox>;

export const ContentBox = styled.div``;
