import { NextSeo } from "next-seo";

const pageTitle = "La+News";
const url = "https://yesmydark.com/news";

const News = () => {
  return (
    <>
      <NextSeo
        title={pageTitle}
        canonical={url}
        openGraph={{
          url,
          title: pageTitle,
        }}
      />
      <div className="flex min-h-[30vh] place-items-start justify-center">
        <div className="p-[2rem] text-center">
          <h1 className="text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
            La+News
          </h1>
          <div className="mt-8">工事中</div>
          <div className="mt-8">
            イベント情報・出演情報・グッズ販売の情報など
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
