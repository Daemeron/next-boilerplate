import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { Normalize } from '@libs/components';

addDecorator((story) => (
  <Fragment>
    <Normalize />
    {story()}
  </Fragment>
));
