import { Box, Heading, Center } from "@chakra-ui/react";

const News = () => {
  return (
    <>
      <Center minH="30vh" placeItems="start">
        <Box padding="2rem" textAlign="center">
          <Heading as="h1">La+News</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>イベント情報・出演情報・グッズ販売の情報など</Box>
        </Box>
      </Center>
    </>
  );
};

export default News;
