import React, { Fragment, ReactChild } from 'react';
import { Normalize } from '@libs/components';

interface ApplicationProps {
  children?: ReactChild | ReactChild[];
}

export const Application = (props: ApplicationProps): JSX.Element => (
  <Fragment>
    <Normalize />
    {props.children}
  </Fragment>
);
