import { Box, Heading, Center, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const pageTitle = "holoX セブンイレブンコラボ";
const url = "https://yesmydark.com/archives";

const Archives = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../../components/special/holox711/Map"), {
        loading: () => <p />,
        ssr: false,
      }),
    []
  );
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
        <Box padding="2rem" textAlign="center" w="full">
          <Heading as="h1" mb={1}>
            holoX セブンイレブンコラボ 対象店舗
          </Heading>
          <Text mb={2}>
            近づくとピンが表示されます。広範囲表示でもピンを表示させたいときは、右の「広範囲でも読込」をONにしてください。
          </Text>
          <Map />
        </Box>
      </Center>
    </>
  );
};

export default Archives;
