import { useRef } from "react";
import { useMenuTrigger, type AriaMenuProps } from "react-aria";
import { useMenuTriggerState, type MenuTriggerProps } from "react-stately";

import { Menu } from "./Menu";
import { Modal } from "./Modal";
import { TriggerButton } from "./TriggerButton";

export interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  portalContainer?: Element;
}

export function MenuButton<T extends object>({
  portalContainer,
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const menuState = useMenuTriggerState(props);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    { type: "menu" },
    menuState,
    buttonRef
  );

  return (
    <>
      <TriggerButton
        {...menuTriggerProps}
        buttonRef={buttonRef}
        state={menuState}
        aria-haspopup="menu"
        aria-label={
          menuState.isOpen ? "ナビゲーションを閉じる" : "ナビゲーションを開く"
        }
      />
      <Modal state={menuState} portalContainer={portalContainer}>
        <Menu {...props} {...menuProps} />
      </Modal>
    </>
  );
}
