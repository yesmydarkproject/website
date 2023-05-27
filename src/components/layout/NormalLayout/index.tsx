import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { type MyLayoutProps } from "types/next";

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

const NormalLayout = ({ children }: MyLayoutProps) => {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Container>
        <Header />
        <AnimatePresence mode="popLayout" initial={false}>
          <Box key={pageKey} as="main" paddingTop="4rem">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 9 }}
            >
              {children}
            </motion.div>
          </Box>
        </AnimatePresence>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default NormalLayout;
