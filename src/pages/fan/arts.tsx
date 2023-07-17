import { NextSeo } from "next-seo";

const pageTitle = "+mate ARTS";
const url = "https://yesmydark.com/fan/arts";

const FanArts = () => {
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
            +mate Arts
          </h1>
          <div className="mt-8">工事中</div>
          <div className="mt-8">
            視聴者からのイラスト・Remixなど（実装方針未定）
          </div>
        </div>
      </div>
    </>
  );
};

export default FanArts;
