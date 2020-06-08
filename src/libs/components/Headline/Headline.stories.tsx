import React, { Fragment } from 'react';

import { Headline } from './Headline';

export default {
  title: 'Components/Headline',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Headline>dummy text</Headline>
  </Fragment>
);
