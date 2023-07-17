import { useRef, type MutableRefObject, useEffect, useMemo } from "react";
import { type AriaButtonProps, useButton } from "react-aria";
import { type OverlayTriggerState } from "react-stately";
import { usePrevious } from "react-use";

// https://codepen.io/ainalem/pen/bGmzRbE
// Keyframes
const pathValues1 = [
  "M 84,24 C 84,24 61.333333,24.001 50,24.001 38.666667,24.001 16,24 16,24",
  "M 76,24 C 76,24 50.055365,50 50,50 49.94463,50 24,24 24,24",
];
const pathValues2 = ["M 84,50 H 50 16", "M 50.001,50 H 50 49.99"];
const pathValues3 = [
  "M 84,76 C 84,76 61.333333,76.001 50,76.001 38.666667,76.001 16,76 16,76",
  "M 76,76 C 76,76 50.055365,50 50,50 49.944635,50 24,76 24,76",
];

const fireAnimation = (animateElement: SVGAnimateElement, values: string[]) => {
  animateElement.setAttribute("values", values.join("; "));
  animateElement.beginElement();
};

interface HamburgerSvgProps {
  state: OverlayTriggerState;
}

function HamburgerSvg({ state }: HamburgerSvgProps) {
  const animate1Ref = useRef<SVGAnimateElement | null>(null);
  const animate2Ref = useRef<SVGAnimateElement | null>(null);
  const animate3Ref = useRef<SVGAnimateElement | null>(null);

  const animatesArray = useMemo(
    () => [
      { key: "animate1", ref: animate1Ref, values: pathValues1 },
      { key: "animate2", ref: animate2Ref, values: pathValues2 },
      { key: "animate3", ref: animate3Ref, values: pathValues3 },
    ],
    []
  );

  const prevIsOpen = usePrevious(state.isOpen);

  useEffect(() => {
    if (!animate1Ref.current || !animate2Ref.current || !animate3Ref.current) {
      return;
    }
    const { isOpen } = state;
    if (isOpen === prevIsOpen) {
      return;
    }

    animatesArray.forEach(({ ref, values }) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fireAnimation(ref.current!, isOpen ? values : values.slice().reverse());
    });
  }, [animatesArray, prevIsOpen, state]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      className="mt-0 fill-none stroke-violet-100 stroke-[12] [stroke-linecap:square] [stroke-linejoin:round]"
    >
      {animatesArray.map(({ key, ref, values }) => (
        <path key={key} d={values[0]}>
          <animate
            ref={ref}
            attributeName="d"
            dur="0.3s"
            repeatCount="1"
            fill="freeze"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.4, 0, 0.2, 1"
          />
        </path>
      ))}
    </svg>
  );
}

export interface ButtonProps extends AriaButtonProps {
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  state: OverlayTriggerState;
}

export function TriggerButton({ buttonRef, state, ...props }: ButtonProps) {
  const { buttonProps } = useButton(props, buttonRef);

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps} ref={buttonRef} className="mr-1 p-2">
      <HamburgerSvg state={state} />
    </button>
  );
}
