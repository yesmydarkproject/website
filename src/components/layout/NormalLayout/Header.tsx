import NextLink from "next/link";

import { screens } from "../../../../preval/tailwindcss";
import YesMyLink from "components/basic/YesMyLink";
import createBreakpoint from "shared/hooks/createBreakpoint";
import useNonMobileHeaderShrunken from "shared/hooks/useNonMobileHeaderShrunken";
import { emToPixel } from "shared/libs/cssUnit";
import { navItems } from "shared/libs/menu";

import { MobileMenu } from "./MobileMenu2";
import WebsiteIcon from "./WebsiteIcon";

const useBreakpoint = createBreakpoint({
  mobile: 0,
  nonMobile: emToPixel(screens.md),
});

export interface HeaderProps {
  mobileMenuPortalContainer?: Element;
}

const Header = ({ mobileMenuPortalContainer }: HeaderProps) => {
  const breakpoint = useBreakpoint();
  const showMobileNav = breakpoint === "mobile";
  const showNonMobileHeaderNav = breakpoint === "nonMobile";
  const { nonMobileHeaderShrunken } = useNonMobileHeaderShrunken();

  // bg-[#261A4A]

  return (
    <div
      className="group/header sticky top-0 z-[2000] flex h-[4rem] w-full items-center justify-between bg-[#4c3494] text-violet-100 transition-all duration-[220ms]  data-[shrink=true]:data-[mobile-nav=false]:h-[2.5rem] data-[shrink=true]:bg-[#32243e] motion-reduce:transition-none"
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

      <MobileMenu portalContainer={mobileMenuPortalContainer} />
    </div>
  );
};

export default Header;
