import { Box, Heading, Center } from "@chakra-ui/react";

const Archives = () => {
  return (
    <>
      <Center minH="30vh" placeItems="start">
        <Box padding="2rem" textAlign="center">
          <Heading as="h1">La+Archives</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>動画一覧・視聴者タグ登録など？</Box>
        </Box>
      </Center>
    </>
  );
};

export default Archives;
