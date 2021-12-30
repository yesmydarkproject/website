/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ラプラス・ダークネス 非公式ファンサイト",
  titleTemplate: "%s | ラプラス・ダークネス 非公式ファンサイト",
  defaultTitle: "ラプラス・ダークネス 非公式ファンサイト",
  description:
    "「刮目せよ！ 吾輩の名前は……ラプラス・ダークネスだ！！」 ホロライブ6期生／秘密結社holoX総帥 ラプラス・ダークネスの非公式ファンサイト。 Yes My Dark!!",
  canonical: "https://yesmydark.com",
  openGraph: {
    url: "https://yesmydark.com",
    title: "ラプラス・ダークネス 非公式ファンサイト",
    description:
      "「刮目せよ！ 吾輩の名前は……ラプラス・ダークネスだ！！」 ホロライブ6期生／秘密結社holoX総帥 ラプラス・ダークネスの非公式ファンサイト。 Yes My Dark!!",
    images: [
      {
        url: "https://yesmydark.com/ogp1b.png",
        alt: "ラプラス・ダークネス 非公式ファンサイト OGP",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    site_name: "ラプラス・ダークネス 非公式ファンサイト",
    type: "website",
    locale: "ja",
  },
  twitter: {
    // handle: "",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
