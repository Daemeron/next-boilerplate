import React, { Fragment } from 'react';
import Head from 'next/head';
import { Section, Header, Footer, Content, Normalize } from '@libs/components';

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Next kit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Normalize />
      <Header />
      <Section>
        <Content>
          <img src={'./zeit.svg'} alt={'zeit'} />
        </Content>
      </Section>
      <Footer />
    </Fragment>
  );
};
