import { useRef, type ReactNode } from "react";
import {
  DismissButton,
  Overlay,
  useModalOverlay,
  type AriaModalOverlayProps,
} from "react-aria";
import { type OverlayTriggerState } from "react-stately";

export interface ModalProps extends AriaModalOverlayProps {
  children: ReactNode;
  state: OverlayTriggerState;
  portalContainer?: Element;
}

export function Modal({
  children,
  state,
  portalContainer,
  ...props
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, modalRef);

  return (
    <Overlay portalContainer={portalContainer}>
      <div
        {...underlayProps}
        className="invisible fixed inset-0 bg-black/70 opacity-0 transition-opacity data-[contents-open=true]:visible data-[contents-open=true]:opacity-100"
        data-contents-open={state.isOpen}
      />
      {state.isOpen && (
        <div
          {...modalProps}
          ref={modalRef}
          style={{
            position: "absolute",
            zIndex: 9999999999,
            top: 0,
            left: 0,
            background: "lightgray",
            border: "1px solid gray",
          }}
        >
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </div>
      )}
    </Overlay>
  );
}
