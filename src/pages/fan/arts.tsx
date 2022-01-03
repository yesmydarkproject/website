import { Box, Heading, Center } from "@chakra-ui/react";
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
      <Center minH="30vh" placeItems="start">
        <Box padding="2rem" textAlign="center">
          <Heading as="h1">+mate Arts</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>
            視聴者からのイラスト・Remixなど（実装方針未定）
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default FanArts;
