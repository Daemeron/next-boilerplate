import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Container } from './Container';

export default {
  title: 'Components/Container',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Container>
      <Paragraph>dummy text</Paragraph>
    </Container>
  </Fragment>
);

const Paragraph = styled.p``;
