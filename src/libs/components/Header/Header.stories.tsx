import React, { Fragment } from 'react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
};

export const WithContent = (): JSX.Element => (
  <Fragment>
    <Header />
  </Fragment>
);
