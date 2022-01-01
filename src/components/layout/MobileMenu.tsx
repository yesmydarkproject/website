import {
  Link as ChakraLink,
  VStack,
  Divider,
  useOutsideClick,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { useRef } from "react";

import { navItems } from "shared/libs/menu";

const primary = "#CEBDFF";
const onPrimary = "#361A7D";

const MobileMenuOverlay = motion(
  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 70%);
    z-index: 1900;
  `
);

const MobileMenuContainer = motion(
  styled.div`
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    padding: 0.75rem 0.5rem 1.25rem;
    background: ${primary};
    color: ${onPrimary};
    /* border-top: 1px solid red; */
    z-index: 1910;
  `
);

const clipVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  clipToTop: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
};

const MobileMenu = ({
  show,
  isOpen,
  onClose,
}: {
  show: boolean | undefined;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const mobileNavRef = useRef({} as HTMLDivElement);

  useOutsideClick({
    ref: mobileNavRef,
    handler: () => onClose(),
    enabled: show && isOpen,
  });

  return show ? (
    <>
      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <MobileMenuContainer
        ref={mobileNavRef}
        variants={clipVariants}
        initial="clipToTop"
        animate={isOpen ? "visible" : "clipToTop"}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Divider marginBottom="1rem" borderColor={onPrimary} />
        <VStack as="nav" align="start" spacing={6}>
          {navItems.map(({ text, href }) => (
            <NextLink key={text} href={href} passHref>
              <ChakraLink
                padding="0 1rem"
                fontWeight={700}
                fontSize="1.2rem"
                lineHeight="100%"
              >
                {text}
              </ChakraLink>
            </NextLink>
          ))}
        </VStack>
      </MobileMenuContainer>
    </>
  ) : (
    <></>
  );
};

export default MobileMenu;
