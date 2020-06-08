import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface SectionProps {
  children?: ReactChild | ReactChild[];
}

export const Section = (props: SectionProps): JSX.Element => <SectionBox>{props.children}</SectionBox>;

export const SectionBox = styled.div``;
