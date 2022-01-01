import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(173deg, #4c3494 0%, #4c3b59 80%, #e2dde9 100%);
  background-size: 150% 150%;
  animation: ${backgroundAnimation} 26s ease infinite;
  color: white;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Box as="main" paddingTop="4rem">
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
