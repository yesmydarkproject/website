import {
  Box,
  Button,
  Heading,
  Center,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const Video = styled.video``;

const primary = "#CEBDFF";
const onPrimary = "#361A7D";

const Page404 = () => {
  return (
    <>
      <Center>
        <Video
          src="/laplus/sleepy.mp4"
          muted
          autoPlay
          loop
          playsInline
          preload="none"
        />
      </Center>
      <Text textAlign="center" fontSize="xs" marginTop={2}>
        <ChakraLink
          href="https://twitter.com/LaplusDarknesss/status/1465432692636327940"
          isExternal
        >
          Laplus from her Twitter
        </ChakraLink>
      </Text>

      <Box marginY={2}>
        <Heading textAlign="center">404: Not found</Heading>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button background={primary} color={onPrimary}>
              戻る
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
