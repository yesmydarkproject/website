import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      justify="center"
      pb={2}
      px={2}
      position="sticky"
      top="100vh"
      direction="column"
      fontSize="0.8rem"
      lineHeight="120%"
      textAlign="center"
    >
      <Text>
        &copy;&ensp;2021&ensp;YesMyDark Project&ensp;&ndash;&ensp;
        <Link href="https://github.com/yesmydarkproject/website" isExternal>
          GitHub
        </Link>
      </Text>
      <Flex
        direction="column"
        mt={1}
        fontSize={{ base: "0.55rem", sm: "0.6rem", md: "0.7rem" }}
        fontWeight={{ base: 200, sm: 300 }}
      >
        <Text>
          本サイトはカバー株式会社・ホロライブプロダクションとの提携関係、両組織からの承認、両組織への所属は一切ありません。
        </Text>
        <Text>
          使用しているコンテンツ
          <Text as="span" fontSize="88%">
            （イラストやテキストなどを含むがこれに限らない）
          </Text>
          の著作権は、正当な権利を有する第三者に帰属します。
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
