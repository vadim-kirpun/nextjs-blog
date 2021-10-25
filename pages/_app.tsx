import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { Layout } from '@components';
import { GlobalStyle, theme } from '@styles';

import 'styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>NextJS Blog</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default MyApp;
