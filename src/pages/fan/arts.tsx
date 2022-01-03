import { Box, Heading, Center } from "@chakra-ui/react";

const FanArts = () => {
  return (
    <>
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
