import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

import { screens } from "../../preval/tailwindcss";
import standing01 from "../../public/laplus/standing01.png";
import YesMyLink from "components/basic/YesMyLink";
import Footer from "components/layout/NormalLayout/Footer";
import Header from "components/layout/NormalLayout/Header";
import SuperIndexLayout from "components/layout/SuperIndexLayout";
import TheInitialScreen from "components/TheInitialScreen";
import createBreakpoint from "shared/hooks/createBreakpoint";
import { emToPixel } from "shared/libs/cssUnit";
import { type NavItem, navItems } from "shared/libs/menu";
import useStorage from "shared/libs/useStorage";
import {
  AboveTheFoldContainer,
  ImageStandingOuter,
  BlackBar1,
  BlackBar2,
  TextLaplusTitle,
  TextLaplusTitleLeader,
  TextLaplusNameOuter,
  TextLaplusNameLine1,
  TextLaplusNameLine2,
  TextWebsiteTitleOuter,
  TextWebsiteTitleLine1,
  TextWebsiteTitleLine2,
  TextWebsiteTitleLine2Red,
  BlackBarBehindMenu,
} from "styles/pages/index.styles";
import { type MyNextPage } from "types/next";

const MotionedTextLaplusTitle = motion(TextLaplusTitle);
const MotionedTextWebsiteTitleOuter = motion(TextWebsiteTitleOuter);
const MotionedTextLaplusNameOuter = motion(TextLaplusNameOuter);

const NavLink = ({ href, text }: Pick<NavItem, "text" | "href">) => (
  <YesMyLink className="text-[max(4vw,1.1rem)] font-bold leading-none no-underline transition-[text-shadow] duration-200 data-[hovered]:[text-shadow:0_-0.03125em_0.46em_rgba(168,114,221,0.8),0_-0.015625em_0.0625em_rgba(168,114,221,0.4)]">
    <NextLink href={href} legacyBehavior={false}>
      {text}
    </NextLink>
  </YesMyLink>
);

const useBreakpoint = createBreakpoint({
  mobile: 0,
  nonMobile: emToPixel(screens.md),
});

const Home: MyNextPage = () => {
  const clipVariants = {
    visible: {
      clipPath: "polygon(0% -50%, 100% -50%, 100% 150%, 0% 150%)",
    },
    clipToRight: {
      clipPath: "polygon(100% -50%, 100% -50%, 100% 150%, 100% 150%)",
    },
    clipToLeft: {
      clipPath: "polygon(0% -50%, 0% -50%, 0% 150%, 0% 150%)",
    },
  };
  const { getItem } = useStorage();
  const [showWebsiteTitle, setShowWebsiteTitle] = useState(false);
  const breakpoint = useBreakpoint();
  const showMobileNav = breakpoint === "mobile";
  const barBehindMenuRef = useRef<HTMLDivElement | null>(null);

  const canSkipInitialScreen =
    getItem("skipInitialScreen", "session") === "true";

  const registerAnimation = () => {
    setTimeout(() => {
      setShowWebsiteTitle(true);
      setTimeout(() => {
        // Workaround for the problem of that the style is not applied
        if (barBehindMenuRef.current) {
          barBehindMenuRef.current.style.clipPath =
            "polygon(0% 75%, 100% 56%, 100% 100%, 0% 101%)";
        }
      }, 240); // delay 0.22s + more small delay
    }, 1200);
  };

  useEffect(() => {
    if (canSkipInitialScreen && !showWebsiteTitle) {
      registerAnimation();
    }
  }, [canSkipInitialScreen, showWebsiteTitle]);

  return (
    <SuperIndexLayout>
      <>
        <div className="fullHeight">
          <style jsx>{`
            .fullHeight {
              min-height: 100vh;
              min-height: calc(var(--vh, 1vh) * 100);
            }
          `}</style>
          {showMobileNav && <Header />}
          <main>
            <AboveTheFoldContainer>
              <BlackBar1 />
              <BlackBar2 />
              <ImageStandingOuter>
                <Image
                  src={standing01}
                  layout="responsive"
                  sizes="76vw"
                  priority
                />
              </ImageStandingOuter>

              <MotionedTextLaplusTitle
                initial="visible"
                variants={clipVariants}
                animate={showWebsiteTitle ? "clipToRight" : "visible"}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                秘密結社holoX<TextLaplusTitleLeader>総帥</TextLaplusTitleLeader>
              </MotionedTextLaplusTitle>
              <MotionedTextWebsiteTitleOuter
                initial="clipToLeft"
                variants={clipVariants}
                animate={showWebsiteTitle ? "visible" : "clipToLeft"}
                transition={{
                  duration: 0.55,
                  ease: [0.18, 0.79, 0.4, 0.95],
                  delay: 0.3,
                }}
              >
                <TextWebsiteTitleLine1>
                  ラプラス・ダークネス
                </TextWebsiteTitleLine1>
                <TextWebsiteTitleLine2>
                  <TextWebsiteTitleLine2Red>非公式</TextWebsiteTitleLine2Red>
                  ファンサイト
                </TextWebsiteTitleLine2>
              </MotionedTextWebsiteTitleOuter>

              <MotionedTextLaplusNameOuter
                initial={{ opacity: 1 }}
                animate={{ opacity: showWebsiteTitle ? 0.3 : 1 }}
                transition={{ duration: 0.3, ease: "circOut", delay: 0.32 }}
              >
                <TextLaplusNameLine1>La+ Darknesss</TextLaplusNameLine1>
                <TextLaplusNameLine2>ラプラス・ダークネス</TextLaplusNameLine2>
              </MotionedTextLaplusNameOuter>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                initial="clipToLeft"
                variants={clipVariants}
                animate={showWebsiteTitle ? "visible" : "clipToLeft"}
                transition={{
                  duration: 0.4,
                  ease: [0.82, 0.05, 0.4, 0.92],
                  delay: 0.22,
                }}
              >
                <BlackBarBehindMenu ref={barBehindMenuRef} />
                <div className="absolute bottom-[1vw] left-[-5vw] flex w-full flex-wrap justify-end [transform:matrix3d(0.90,-0.05,0,-0.0002,0,1.05,0,-0.0003,0,0,1,0,0,0,0,1)]">
                  {navItems.map((item) => (
                    <div
                      key={item.text}
                      className="mx-[1.8vw] my-[max(0.2rem,calc(1.35vw_-_5px))]"
                    >
                      <NavLink {...item} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AboveTheFoldContainer>
          </main>
          <Footer />
        </div>
        <TheInitialScreen
          initialShown={!canSkipInitialScreen}
          onAnimationCompleted={() => {
            registerAnimation();
          }}
        />
      </>
    </SuperIndexLayout>
  );
};

export default Home;
