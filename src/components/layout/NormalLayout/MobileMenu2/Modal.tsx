import { AnimatePresence, motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import {
  DismissButton,
  Overlay,
  useModalOverlay,
  type AriaModalOverlayProps,
  usePress,
} from "react-aria";
import { type OverlayTriggerState } from "react-stately";

import useNonMobileHeaderShrunken from "shared/hooks/useNonMobileHeaderShrunken";

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

  const { pressProps } = usePress({ onPressStart: () => state.close() });

  const { nonMobileHeaderShrunken } = useNonMobileHeaderShrunken();

  return (
    <Overlay portalContainer={portalContainer}>
      <AnimatePresence mode="sync">
        {state.isOpen && (
          <motion.div
            // Avoid type issues between motion.div and react-aria DOMAttributes
            {...(underlayProps as Record<never, never>)}
            {...(pressProps as Record<never, never>)}
            className="fixed inset-0 bg-black/70 "
            data-contents-open={state.isOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      <div
        {...modalProps}
        ref={modalRef}
        className="fixed left-0 right-0 top-[4rem] z-[2000] bg-[#4c3494] px-2 pb-3 pt-3 transition-[clip-path] duration-300 [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] data-[nav-shrunken=true]:bg-[#32243e] data-[open=true]:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
        data-open={state.isOpen}
        data-nav-shrunken={nonMobileHeaderShrunken}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
