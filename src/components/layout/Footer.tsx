import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="center" pb={2}>
      <Text>
        &copy;&ensp;2021&ensp;YesMyDark Project&ensp;&ndash;&ensp;
        <Link href="https://github.com/yesmydarkproject/website" isExternal>
          GitHub
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
