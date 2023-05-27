import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { type MyLayoutProps } from "types/next";

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

const MotionedPageContainer = motion(styled.div`
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(173deg, #4c3494 0%, #4c3b59 80%, #e2dde9 100%);
  background-size: 150% 150%;
  animation: ${backgroundAnimation} 26s ease infinite;
  color: white;
  position: relative;
`);

const SuperIndexLayout = ({ children }: MyLayoutProps) => {
  return (
    <MotionedPageContainer
      initial="hidden"
      animate="shown"
      exit="hidden"
      variants={{
        shown: {
          opacity: 1,
          transition: { duration: 0.5, ease: [0.23, 0.7, 0.23, 0.9] },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.1,
            delay: 1.1,
            ease: [0.23, 0.7, 0.23, 0.9],
          },
        },
      }}
    >
      {children}
    </MotionedPageContainer>
  );
};

export default SuperIndexLayout;
