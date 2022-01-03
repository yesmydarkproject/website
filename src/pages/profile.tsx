import { Box, Heading, Center } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const pageTitle = "La+Profile";
const url = "https://yesmydark.com/profile";

const Profile = () => {
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
          <Heading as="h1">La+Profile</Heading>
          <Box marginTop={8}>工事中</Box>
          <Box marginTop={8}>
            公式プロフィール・自称プロフィール・視聴者からの印象・非公式ウェブアンケート（予定）など
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Profile;
