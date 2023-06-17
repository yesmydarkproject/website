import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "react-use";

import { screens } from "../../../../preval/tailwindcss";
import YesMyLink from "components/basic/YesMyLink";
import createBreakpoint from "shared/hooks/createBreakpoint";
import { emToPixel } from "shared/libs/cssUnit";
import { navItems } from "shared/libs/menu";

import MobileMenu from "./MobileMenu";
import WebsiteIcon from "./WebsiteIcon";

// const primary = "#CEBDFF";
// const onPrimary = "#361A7D";

const primaryContainer = "#4D3595";
const onPrimaryContainer = "#E8DDFF";

const useBreakpoint = createBreakpoint({
  mobile: 0,
  nonMobile: emToPixel(screens.md),
});

const ScrollRefBridge = {
  get scrollTop() {
    return typeof document !== "undefined"
      ? document.documentElement.scrollTop
      : 0;
  },
  get scrollLeft() {
    return typeof document !== "undefined"
      ? document.documentElement.scrollLeft
      : 0;
  },
  get addEventListener() {
    return typeof window !== "undefined"
      ? window.addEventListener.bind(window)
      : undefined;
  },
  get removeEventListener() {
    return typeof window !== "undefined"
      ? window.removeEventListener.bind(window)
      : undefined;
  },
};

const Header = () => {
  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();

  const breakpoint = useBreakpoint();
  const showMobileNav = breakpoint === "mobile";
  const showNonMobileHeaderNav = breakpoint === "nonMobile";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollRef = useRef<any>(ScrollRefBridge);
  const { y: scrollY } = useScroll(scrollRef);
  const [nonMobileHeaderShrunken, setNonMobileHeaderShrunken] = useState(
    scrollY > 100
  );

  useEffect(() => {
    if (nonMobileHeaderShrunken && scrollY <= 90) {
      setNonMobileHeaderShrunken(false);
    } else if (/* !nonMobileHeaderShrunken && */ scrollY > 120) {
      setNonMobileHeaderShrunken(true);
    }
  }, [nonMobileHeaderShrunken, scrollY]);

  // bg-[#261A4A]

  return (
    <>
      <div
        className="group/header sticky top-0 z-[2000] flex h-[4rem] w-full items-center justify-between bg-transparent text-violet-100 transition-all duration-[220ms]  data-[shrink=true]:data-[mobile-nav=false]:h-[2.5rem] data-[shrink=true]:bg-[#32243e] motion-reduce:transition-none"
        data-shrink={nonMobileHeaderShrunken}
        data-mobile-nav={showMobileNav}
      >
        <WebsiteIcon />

        <div
          className="flex pl-[1.5rem] pr-2"
          style={{ display: !showNonMobileHeaderNav ? "none" : undefined }}
        >
          {navItems.map(({ text, href, group }) => (
            <YesMyLink
              key={text}
              className="px-4 py-0 text-[1.2rem] font-bold leading-none no-underline group-[[data-shrink=true]]/header:text-violet-200/80 data-[hovered]:[text-shadow:0_-0.03125em_0.125em_rgba(168,114,221,0.8),0_-0.015625em_0.0625em_rgba(168,114,221,0.4)]"
            >
              <NextLink href={href} legacyBehavior={false}>
                {group === "OFFICIAL" ? (
                  <>
                    <span className="inline-block whitespace-nowrap">La+</span>
                    <span className="inline-block whitespace-nowrap">
                      {text.split("La+")}
                    </span>
                  </>
                ) : (
                  <span>{text}</span>
                )}
              </NextLink>
            </YesMyLink>
          ))}
        </div>

        <IconButton
          style={{ display: !showMobileNav ? "none" : undefined }}
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
      </div>
      <MobileMenu
        show={showMobileNav}
        isOpen={isMobileNavOpen}
        onClose={onMobileNavClose}
      />
    </>
  );
};

export default Header;
