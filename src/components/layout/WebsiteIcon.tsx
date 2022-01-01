import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const onPrimary = "#361A7D";
const onPrimaryContainer = "#E8DDFF";
const bezier = "cubic-bezier(0, 0, 0.05, 0.97)";

const WebsiteIcon = () => {
  return (
    <NextLink href="/" passHref>
      <ChakraLink
        display="flex"
        flexShrink={0}
        position="relative"
        color={onPrimary}
        transition={`0.4s color ${bezier} 0.05s`}
        _before={{
          content: `""`,
          position: "absolute",
          background: "#4c3494",
          width: "100%",
          height: "100%",
          zIndex: "1",
          transition: `0.4s ${bezier}`,
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
        _hover={{
          color: onPrimaryContainer,
          _before: {
            transform: "scaleX(1)",
          },
        }}
      >
        <Flex zIndex="2" padding="0 0.4rem 0 0.2rem" placeItems="center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.svg" alt="" style={{ width: "3.5rem" }} />
          <Text
            as="span"
            lineHeight="1.2em"
            fontWeight="600"
            fontSize="1.125rem"
          >
            La+
            <br />
            Fansite
          </Text>
        </Flex>
      </ChakraLink>
    </NextLink>
  );
};

export default WebsiteIcon;
