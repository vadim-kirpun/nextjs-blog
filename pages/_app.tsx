import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { Layout } from '@components';
import { GlobalStyle, theme } from '@styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
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
