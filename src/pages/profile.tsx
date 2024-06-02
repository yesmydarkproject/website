import Image from "next/image";
import { NextSeo } from "next-seo";

import Laplus3d01 from "../../public/laplus/3d01.png";
import {
  Section1TextContainer,
  Section2Container,
  AutoFontSizedHeading2,
  AutoFontSizedTextContainer,
} from "styles/pages/profile.styles";

const pageTitle = "La+Profile";
const url = "https://yesmydark.com/profile";

const Profile = () => {
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
      <div className="page-profile relative min-h-[30vh] w-full overflow-x-hidden">
        <h1 className="absolute left-0 top-[0.5rem]  text-[max(2rem,5vw)] font-semibold leading-none text-violet-400/50 ">
          La+Profile
        </h1>
        <div className="relative h-[650px]">
          {/* top: sm: 20px, md: -64px */}
          {/* right: 0: 0px, sm: 90px, lg: 496px(50%) */}
          <div className="absolute right-[18.75vw] top-[min(calc((7520px-2100vw)/40),20px)] w-[min(100%,900px)] sm:-top-16 sm:right-[calc((20300vw-74400px)/256)] lg:right-1/2">
            <div className="translate-x-[18%] rotate-[38.65deg]">
              <Image
                src={Laplus3d01}
                layout="responsive"
                sizes="100vw"
                priority
              />
            </div>
          </div>
          {/* top: sm: ≈200px, md: 136px, 1331px: 160px */}
          {/* left: sm: 192px(40%), md: 399.36px(52%) */}
          {/* width: sm: 288px(60%), md: 364.8px(47.5%) */}
          <Section1TextContainer
            className="absolute left-[calc(72vw-153.6px)] top-[200px] w-[calc(26.67vw+160px)] p-4 font-semibold sm:top-[calc((2763px-200vw)/9)] md:left-[52%] md:top-[16rem] md:w-[47.5%] "
            transparentFrom={864}
          >
            <AutoFontSizedHeading2 className="break-keep leading-tight">
              貴様ら、
              <wbr />
              刮目せよ！！
            </AutoFontSizedHeading2>
            <AutoFontSizedTextContainer className="mt-[5em] leading-relaxed">
              <p className="mb-[1em]">【秘密結社holoX】を設立した総帥。</p>
              <p className="mb-[1em]">
                本来頭も良く、力も膨大だが、今は力の大半が封印されている。枷のせいで力の大半が封印されていることは本人も薄々感じているが、いつからかけられたのかよく覚えていない。
              </p>
              <p>側にいるカラスとは長い付き合い。</p>
            </AutoFontSizedTextContainer>
          </Section1TextContainer>
        </div>
        <Section2Container className="relative h-[800px]">s</Section2Container>
        <div className="h-[200vh] p-[2rem] text-center" />
      </div>
    </>
  );
};

export default Profile;
