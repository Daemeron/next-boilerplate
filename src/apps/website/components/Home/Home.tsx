import React, { Fragment } from 'react';
import Head from 'next/head';
import { Section, Header, Footer, Content, Normalize } from '@libs/components';
import { ThemeProvider } from 'styled-components';
import { ThemeProps } from 'apps/website/core';

const Theme: ThemeProps = {
  mode: 'light',
};

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Next kit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Normalize />
      <ThemeProvider theme={Theme}>
        <Header />
        <Section>
          <Content>
            <img src={'./zeit.svg'} alt={'zeit'} />
          </Content>
        </Section>
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};
