import { Box, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { ReactElement, useEffect, useState } from "react";

import standing01 from "../../public/laplus/standing01.png";
import Footer from "components/layout/Footer";
import TheInitialScreen from "components/TheInitialScreen";
import { NavItem, navItems } from "shared/libs/menu";
import useStorage from "shared/libs/useStorage";
import {
  PageContainer,
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
// import Header from "components/layout/Header";

const MotionedTextLaplusTitle = motion(TextLaplusTitle);
const MotionedTextWebsiteTitleOuter = motion(TextWebsiteTitleOuter);
const MotionedTextLaplusNameOuter = motion(TextLaplusNameOuter);

const NavLink = ({ href, text }: Pick<NavItem, "text" | "href">) => (
  <NextLink href={href} passHref>
    <ChakraLink
      fontWeight={700}
      fontSize="max(4vw, 1.1rem)"
      lineHeight="100%"
      transition="0.2s text-shadow"
      _focus={{
        textShadow:
          "0 -0.03125em 0.125em rgba(168, 114, 221, 0.8), 0 -0.015625em 0.0625em rgba(168, 114, 221, 0.4)",
      }}
      _hover={{
        textShadow:
          "0 -0.03125em 0.46em rgba(168, 114, 221, 0.8), 0 -0.015625em 0.0625em rgba(168, 114, 221, 0.4)",
      }}
    >
      {text}
    </ChakraLink>
  </NextLink>
);

const Home = () => {
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

  const canSkipInitialScreen =
    getItem("skipInitialScreen", "session") === "true";

  const registerAnimation = () => {
    setTimeout(() => {
      setShowWebsiteTitle(true);
    }, 1200);
  };

  useEffect(() => {
    if (canSkipInitialScreen && !showWebsiteTitle) {
      registerAnimation();
    }
  });

  return (
    <>
      <div className="fullHeight">
        <style jsx>{`
          .fullHeight {
            min-height: 100vh;
            min-height: calc(var(--vh, 1vh) * 100);
          }
        `}</style>
        {/* <Header /> */}
        <Box as="main">
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
              transition={{ duration: 0.55, ease: "circOut", delay: 0.15 }}
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
              transition={{ duration: 0.4, ease: "circOut", delay: 0.22 }}
            >
              <BlackBarBehindMenu />
              <Flex
                position="absolute"
                bottom="1vw"
                left="-5vw"
                justify="right"
                width="100%"
                flexWrap="wrap"
                transform="matrix3d(0.90, -0.05, 0, -0.0002, 0, 1.05, 0, -0.0003, 0, 0, 1, 0, 0, 0, 0, 1)"
              >
                {navItems.map((item) => (
                  <Box
                    key={item.text}
                    margin="max(0.2rem, calc(1.35vw - 5px)) 1.8vw"
                  >
                    <NavLink {...item} />
                  </Box>
                ))}
              </Flex>
            </motion.div>
          </AboveTheFoldContainer>
        </Box>
        <Footer />
      </div>
      <TheInitialScreen
        initialShown={!canSkipInitialScreen}
        onAnimationCompleted={() => {
          registerAnimation();
        }}
      />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageContainer>{page}</PageContainer>;
};

Home.displayName = "index";

export default Home;
