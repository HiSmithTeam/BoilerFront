import type { AppProps } from 'next/app';
import LayoutContainer from '@/containers/layout/LayoutContainer';
import Provider from '@/providers';
import '@/styles/global.scss';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </Provider>
  );
};

export default app;
