import { Box, Heading, Center } from "@chakra-ui/react";
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
      <Center minH="30vh" placeItems="start">
        <Box padding="2rem" textAlign="center">
          <Heading as="h1">+mate links</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>
            公式以外のウェブサイト・Wiki・各種サーバーリンクなど
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default FanLinks;
