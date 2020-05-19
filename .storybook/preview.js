import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { BodyWrapper } from '../src/core/components/BodyWrapper';

addDecorator((story) => (
  <Fragment>
    <BodyWrapper>{story()}</BodyWrapper>
  </Fragment>
));
