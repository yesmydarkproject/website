import { NextSeo } from "next-seo";

const pageTitle = "+mate LINKS";
const url = "https://yesmydark.com/fan/links";

const FanLinks = () => {
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
          <h1 className="text-3xl leading-snug md:text-4xl md:leading-tight">
            +mate links
          </h1>
          <div className="mt-8">工事中</div>
          <div className="mt-8">
            公式以外のウェブサイト・Wiki・各種サーバーリンクなど
          </div>
        </div>
      </div>
    </>
  );
};

export default FanLinks;
