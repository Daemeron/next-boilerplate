import React, { Fragment } from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Button>dummy text</Button>
  </Fragment>
);
