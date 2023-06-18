import { type MutableRefObject } from "react";
import { type AriaButtonProps, useButton } from "react-aria";

export interface ButtonProps extends AriaButtonProps {
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  className?: string;
}

export function TriggerButton({ buttonRef, className, ...props }: ButtonProps) {
  const { buttonProps } = useButton(props, buttonRef);

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps} ref={buttonRef} className={className}>
      {props.children}
    </button>
  );
}
