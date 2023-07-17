import NextLink from "next/link";
import { Item } from "react-stately";

import YesMyLink from "components/basic/YesMyLink";
import { navItems } from "shared/libs/menu";

import { MenuButton } from "./MenuButton";

export interface MobileMenuProps {
  portalContainer?: Element;
}

export function MobileMenu({ portalContainer }: MobileMenuProps) {
  return (
    <MenuButton portalContainer={portalContainer} autoFocus shouldFocusWrap>
      {navItems.map(({ text, href }) => (
        <Item key={text} textValue={text}>
          <YesMyLink className="no-underline data-[hovered]:[text-shadow:0_-0.03125em_0.125em_rgba(168,114,221,0.8),0_-0.015625em_0.0625em_rgba(168,114,221,0.4)]">
            <NextLink href={href} legacyBehavior={false}>
              <span>{text}</span>
            </NextLink>
          </YesMyLink>
        </Item>
      ))}
    </MenuButton>
  );
}
