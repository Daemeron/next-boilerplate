import React, { Fragment, ReactChild } from 'react';
import { GlobalStyle } from '../';
import { ThemeProvider } from 'styled-components';

interface ApplicationProps {
  children?: ReactChild | ReactChild[];
}

export const Application = (props: ApplicationProps): JSX.Element => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ style: 'dark' }}>{props.children}</ThemeProvider>
  </Fragment>
);
