import type { AppProps } from "next/app";
import LayoutContainer from "@/containers/layout/LayoutContainer";
import Provider from "@/providers";
import "@/styles/global.scss";
import "@/styles/service.scss";
import MetaHead from "@/components/seo/metaHead/MetaHead";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const app = ({ Component, pageProps }: AppProps) => {
  // TODO: SUSPENSE 도입여부
  return (
    <Provider>
      <ErrorBoundary
        fallbackRender={(props: FallbackProps) => {
          return <>ERROR - {JSON.stringify(props.error)}</>;
        }}
      >
        <LayoutContainer>
          <MetaHead
            title="BoilerFront"
            author="Ruth"
            description="BoilerFront"
          />
          <Component {...pageProps} />
        </LayoutContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default app;
