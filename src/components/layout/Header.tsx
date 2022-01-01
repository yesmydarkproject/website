import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { navItems } from "shared/libs/menu";

import MobileMenu from "./MobileMenu";
import WebsiteIcon from "./WebsiteIcon";

const primary = "#CEBDFF";
const onPrimary = "#361A7D";

const primaryContainer = "#4D3595";
const onPrimaryContainer = "#E8DDFF";

const Header = () => {
  const showMobileNav = useBreakpointValue({ base: true, md: false });
  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();

  return (
    <>
      <Flex
        width="full"
        align="center"
        height="4rem"
        background={primary}
        color={onPrimary}
        zIndex="2000"
        position="absolute"
        justify="space-between"
      >
        <WebsiteIcon />

        {!showMobileNav && (
          <Flex paddingLeft="1.5rem">
            {navItems.map(({ text, href, group }) => (
              <NextLink key={text} href={href} passHref>
                <ChakraLink
                  padding="0 1rem"
                  fontWeight={700}
                  fontSize="1.2rem"
                  lineHeight="100%"
                  _focus={{
                    textShadow:
                      "0 -0.03125em 0.125em rgba(168, 114, 221, 0.8), 0 -0.015625em 0.0625em rgba(168, 114, 221, 0.4)",
                  }}
                  _hover={{
                    textShadow:
                      "0 -0.03125em 0.46em rgba(168, 114, 221, 0.8), 0 -0.015625em 0.0625em rgba(168, 114, 221, 0.4)",
                  }}
                >
                  {group === "OFFICIAL" ? (
                    <span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        La+
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {text.split("La+")}
                      </span>
                    </span>
                  ) : (
                    <span>{text}</span>
                  )}
                </ChakraLink>
              </NextLink>
            ))}
          </Flex>
        )}

        {showMobileNav && (
          <IconButton
            marginRight="2"
            icon={<HamburgerIcon />}
            aria-label="メニューを開く"
            background={primaryContainer}
            color={onPrimaryContainer}
            onClick={onMobileNavOpen}
            _hover={{
              background: "#7E67CA",
            }}
            _active={{
              background: "#B49CFF",
            }}
            _disabled={{
              background: `${primaryContainer} !important`,
              opacity: 0.4,
              cursor: "not-allowed",
            }}
            disabled={isMobileNavOpen}
          />
        )}
      </Flex>
      <MobileMenu
        show={showMobileNav}
        isOpen={isMobileNavOpen}
        onClose={onMobileNavClose}
      />
    </>
  );
};

export default Header;
