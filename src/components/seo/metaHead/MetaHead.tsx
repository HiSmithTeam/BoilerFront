import Head from "next/head";

export interface IMetaHead {
  title: string;
  author: string;
  description: string;
}

const MetaHead = ({ title, author, description }: IMetaHead) => {
  return (
    <Head>
      <link rel="icon" href="/assets/images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:article:author" content={author} />
      <meta property="og:site_name" content={author} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site" content={author} />
      <meta property="og:article:author" content={author} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=2.0,minimum-scale=1.0,user-scalable=yes"
      />
    </Head>
  );
};

export default MetaHead;
