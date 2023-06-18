import { useEffect, useRef } from "react";
import { useMenuTrigger, type AriaMenuProps } from "react-aria";
import { useMenuTriggerState, type MenuTriggerProps } from "react-stately";

import { Menu } from "./Menu";
import { Modal } from "./Modal";
import { TriggerButton } from "./TriggerButton";

export interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
  portalContainer?: Element;
}

export function MenuButton<T extends object>({
  label,
  portalContainer,
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const menuState = useMenuTriggerState(props);

  useEffect(() => {
    // state.open();
  }, [menuState]);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {},
    menuState,
    buttonRef
  );

  return (
    <>
      <TriggerButton
        {...menuTriggerProps}
        buttonRef={buttonRef}
        className="ml-[250px] h-[30px] text-[14px]"
      >
        {label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </TriggerButton>
      <Modal state={menuState} portalContainer={portalContainer} isDismissable>
        <Menu {...props} {...menuProps} />
      </Modal>
    </>
  );
}
