import React, { Fragment } from 'react';

import { Anchor } from './Anchor';

export default {
  title: 'Components/Anchor',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Anchor>dummy text</Anchor>
  </Fragment>
);
