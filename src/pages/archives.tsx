import { NextSeo } from "next-seo";

const pageTitle = "La+Archives";
const url = "https://yesmydark.com/archives";

const Archives = () => {
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
            La+Archives
          </h1>
          <div className="mt-8">工事中</div>
          <div className="mt-8">動画一覧・視聴者タグ登録など？</div>
        </div>
      </div>
    </>
  );
};

export default Archives;
