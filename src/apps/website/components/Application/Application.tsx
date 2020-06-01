import React, { Fragment, ReactChild } from 'react';
import { Normalize } from '@website/components';
import { ThemeProvider } from 'styled-components';

interface ApplicationProps {
  children?: ReactChild | ReactChild[];
}

export const Application = (props: ApplicationProps): JSX.Element => (
  <Fragment>
    <Normalize />
    <ThemeProvider theme={{ style: 'light' }}>{props.children}</ThemeProvider>
  </Fragment>
);
