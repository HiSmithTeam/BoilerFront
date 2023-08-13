import DynamicMeta from "@/components/seo/dynamicMeta/DynamicMeta";

const SeoContainer = () => {
  const meta = {
    title: "SEO sample",
    desciption: "BolierFront SEO sample",
  };

  return (
    <>
      <div className="content-wrap">
        <DynamicMeta title={meta.title} description={meta.desciption} />
        <div className="content">SeoContainer</div>
      </div>
    </>
  );
};

export default SeoContainer;
