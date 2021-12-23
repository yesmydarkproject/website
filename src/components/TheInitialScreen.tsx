import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: linear-gradient(173deg, #4c3494 0%, #4c3b59 80%, #e2dde9 100%);
  background-size: 150% 150%;
  animation: ${backgroundAnimation} 26s ease infinite;
  color: white;
  z-index: 2000;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
`;

const BeholdText = styled.div<{
  color: string;
}>`
  position: fixed;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(0.85);
  // padding: 0.3em 1.2em;
  color: ${(props) => props.color};
  background-color: transparent;
  // border: 2px solid ${(props) => props.color};
  overflow: hidden;
  text-align: center;
  font-size: 6.5rem;
  font-weight: 700;
  transition: 0.3s;
  z-index: 1;
  white-space: nowrap;
`;

const YesMyDarkButton = styled.button<{
  color: string;
  hovered: string;
}>`
  position: fixed;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%) scaleX(0.9);
  padding: 0.3em 1.2em;
  color: ${(props) => props.color};
  background-color: transparent;
  border: 2px solid ${(props) => props.color};
  overflow: hidden;
  text-align: center;
  font-size: 4rem;
  font-weight: 200;
  transition: 0.3s;
  z-index: 1;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 380%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: ${(props) => props.color};
    transition: 0.6s cubic-bezier(0.12, 0.5, 0.34, 0.76);
    z-index: -1;
  }

  &:hover::before {
    width: 105%;
  }

  &:hover {
    color: ${(props) => props.hovered};
  }
`;

const TheInitialScreen = () => {
  const [shown, setShown] = useState(true);

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          key="screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container>
            <BeholdText color="#e2dde9">刮目せよ!</BeholdText>
            <YesMyDarkButton
              color="#e2dde9"
              hovered="#4c3494"
              onClick={() => setShown(false)}
            >
              Yes My Dark !!
            </YesMyDarkButton>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TheInitialScreen;
