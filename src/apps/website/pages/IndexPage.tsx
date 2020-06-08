import React, { Fragment } from 'react';
import Head from 'next/head';
import { Section, Header, Footer, Content } from '@libs/components';
import { Application } from '@apps/website';

export const IndexPage = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Next kit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Application>
        <Header />
        <Section>
          <Content>
            <img src={'./zeit.svg'} alt={'zeit'} />
          </Content>
        </Section>
        <Footer />
      </Application>
    </Fragment>
  );
};
