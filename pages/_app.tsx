import type { AppProps } from "next/app";
import LayoutContainer from "@/containers/layout/LayoutContainer";
import Provider from "@/providers";
import "@/styles/global.scss";
import "@/styles/service.scss";
import MetaHead from "@/components/seo/metaHead/MetaHead";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <LayoutContainer>
        <MetaHead title="BoilerFront" author="Ruth" description="BoilerFront" />
        <Component {...pageProps} />
      </LayoutContainer>
    </Provider>
  );
};

export default app;
