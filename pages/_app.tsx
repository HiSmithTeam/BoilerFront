import type { AppProps } from "next/app";
import LayoutContainer from "@/containers/layout/LayoutContainer";
import Provider from "@/providers";
import "@/styles/global.scss";
import "@/styles/service.scss";
import MetaHead from "@/components/seo/metaHead/MetaHead";
import ErrorBoundaryProvider from "@/providers/errorBoundary/ErrorBoundaryProvider";

const app = ({ Component, pageProps }: AppProps) => {
  // TODO: SUSPENSE 도입여부
  return (
    <Provider>
      <ErrorBoundaryProvider>
        <LayoutContainer>
          <MetaHead
            title="BoilerFront"
            author="Ruth"
            description="BoilerFront"
          />
          <Component {...pageProps} />
        </LayoutContainer>
      </ErrorBoundaryProvider>
    </Provider>
  );
};

export default app;
