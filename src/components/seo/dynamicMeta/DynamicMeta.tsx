import { NextSeo } from "next-seo";

export interface IMetaProps {
  title?: string;
  description?: string;
}

const DynamicMeta = ({ title, description }: IMetaProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        description: description,
      }}
    />
  );
};

export default DynamicMeta;
