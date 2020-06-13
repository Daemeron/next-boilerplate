import React from 'react';
import NextError from 'next/error';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

export const Error = ({ statusCode }: ErrorProps): JSX.Element => (
  <NextError statusCode={statusCode ? statusCode : 500} title={'Something went wrong :('} />
);

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
