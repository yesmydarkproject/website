import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

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

  const [mobileMenuParent, setMobileMenuParent] = useState<
    HTMLDivElement | undefined
  >(undefined);

  return (
    <motion.div
      initial="hidden"
      animate="shown"
      exit="hidden"
      variants={{
        shown: {
          opacity: 1,
          transition: { duration: 0.1, ease: [0.23, 0.7, 0.23, 0.9] },
        },
        hidden: {
          opacity: 0.5,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: [0.23, 0.7, 0.23, 0.9],
          },
        },
      }}
    >
      <Container
        ref={(ref) => {
          setMobileMenuParent(ref ?? undefined);
        }}
      >
        <Header mobileMenuPortalContainer={mobileMenuParent} />
        <AnimatePresence mode="popLayout" initial={false}>
          <main key={pageKey} className="pt-[4rem]">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 9 }}
            >
              {children}
            </motion.div>
          </main>
        </AnimatePresence>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default NormalLayout;
