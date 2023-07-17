import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useMemo } from "react";

const pageTitle = "holoX セブンイレブンコラボの対象店舗を地図で見る";
const url = "https://yesmydark.com/archives";
const description =
  "holoXとセブンのコラボの対象店舗一覧がとんでもないことになってたので作りました。普段は総帥の非公式ファンサイトです。×××「刮目せよ！ 吾輩の名前は……ラプラス・ダークネスだ！！」 ホロライブ6期生／秘密結社holoX総帥 ラプラス・ダークネスの非公式ファンサイト。 Yes My Dark!!";

const Loader = () => <p />;
const Archives = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/special/holox711/Map"), {
        loading: Loader,
        ssr: false,
      }),
    []
  );
  return (
    <>
      <NextSeo
        title={pageTitle}
        canonical={url}
        description={description}
        openGraph={{
          url,
          title: pageTitle,
          description,
        }}
      />
      <div className="flex min-h-[30vh] place-items-start justify-center">
        <div className="w-full p-[2rem] text-center">
          <h1 className="mb-1 text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
            holoX セブンイレブンコラボ 対象店舗
          </h1>
          <p className="mb-2">
            近づくとピンが表示されます。広範囲表示でもピンを表示させたいときは、右の「広範囲でも読込」をONにしてください。
          </p>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Archives;
