import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";

import standing01 from "../../public/laplus/standing01.png";
import Footer from "components/layout/Footer";

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
} from "./index.styles";

// import Header from "components/layout/Header";
// import TheInitialScreen from "components/TheInitialScreen";

const Home = () => {
  const MotionedTextLaplusTitle = motion(TextLaplusTitle);
  const MotionedTextWebsiteTitleOuter = motion(TextWebsiteTitleOuter);
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
  const [showWebsiteTitle, setShowWebsiteTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWebsiteTitle(true);
    }, 2000);
  });

  return (
    <>
      <Box>
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
            <TextLaplusNameOuter>
              <TextLaplusNameLine1>La+ Darknesss</TextLaplusNameLine1>
              <TextLaplusNameLine2>ラプラス・ダークネス</TextLaplusNameLine2>
            </TextLaplusNameOuter>
          </AboveTheFoldContainer>
          ddd
        </Box>
        <Footer />
      </Box>
      {/* <TheInitialScreen /> */}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageContainer /* transition="0.5s ease-out" */>{page}</PageContainer>;
};

export default Home;
