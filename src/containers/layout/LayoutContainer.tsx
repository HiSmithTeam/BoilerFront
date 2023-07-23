import Head from 'next/head';
import { IProps } from '@/types/global';

const LayoutContainer = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className="layout-root">
        <div className="haeder-root">header</div>
        <div className="layout-content">
          <div className="lnb-root">lnb</div>ff
          <div className="content-root">{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutContainer;
