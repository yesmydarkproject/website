import { Box } from "@chakra-ui/react";
import Image from "next/image";
import type { ReactElement } from "react";

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
} from "./index.styles";

// import Header from "components/layout/Header";
// import TheInitialScreen from "components/TheInitialScreen";

const Home = () => {
  return (
    <AboveTheFoldContainer>
      <BlackBar1 />
      <BlackBar2 />
      <ImageStandingOuter>
        <Image src={standing01} layout="responsive" sizes="76vw" priority />
      </ImageStandingOuter>
      <TextLaplusTitle>
        秘密結社holoX<TextLaplusTitleLeader>総帥</TextLaplusTitleLeader>
      </TextLaplusTitle>
      <TextLaplusNameOuter>
        <TextLaplusNameLine1>La+ Darknesss</TextLaplusNameLine1>
        <TextLaplusNameLine2>ラプラス・ダークネス</TextLaplusNameLine2>
      </TextLaplusNameOuter>
      ddd
    </AboveTheFoldContainer>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageContainer /* transition="0.5s ease-out" */>
      <Box>
        {/* <Header /> */}
        <Box as="main">{page}</Box>
        <Footer />
      </Box>
      {/* <TheInitialScreen /> */}
    </PageContainer>
  );
};

export default Home;
