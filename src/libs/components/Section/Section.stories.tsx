import React, { Fragment } from 'react';

import { Section } from './Section';

export default {
  title: 'Components/Section',
};

export const WithText = (): JSX.Element => (
  <Fragment>
    <Section>dummy text</Section>
  </Fragment>
);
