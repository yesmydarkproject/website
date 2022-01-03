import { Box, Heading, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const pageTitle = "La+Works";
const url = "https://yesmydark.com/works";

const Works = () => {
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
          <Heading as="h1">La+Works</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>公式イラスト・楽曲・怪文書など</Box>
        </Box>
      </Center>
    </>
  );
};

export default Works;
