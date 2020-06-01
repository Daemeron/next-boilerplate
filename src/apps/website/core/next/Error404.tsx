import React from 'react';
import Error from 'next/error';

export const Error404 = (): JSX.Element => <Error statusCode={404} title={'Page not found'} />;
