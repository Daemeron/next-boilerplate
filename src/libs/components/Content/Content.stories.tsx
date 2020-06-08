import React, { Fragment } from 'react';

import { Content } from './Content';

export default {
  title: 'Components/Content',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Content>dummy text</Content>
  </Fragment>
);
