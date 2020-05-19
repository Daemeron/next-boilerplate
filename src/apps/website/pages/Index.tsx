import React, { Fragment } from 'react';
import Head from 'next/head';
import { Application, Section, Header, Footer, Headline } from '../components';

export const Index = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Next kit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Application>
        <Header />
        <Section>
          <Headline>
            <img src={'./zeit.svg'} alt={'zeit'} />
          </Headline>
        </Section>
        <Footer />
      </Application>
    </Fragment>
  );
};
