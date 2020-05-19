import React from 'react';
import Error from 'next/error';
import { NextPageContext } from 'next';

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorPageProps): JSX.Element => (
  <Error statusCode={statusCode} title={statusCode === 404 ? 'Page not found' : 'Something went wrong'} />
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorPageProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
