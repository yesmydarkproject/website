import { useEffect, useRef, useState } from "react";
import { useScroll } from "react-use";

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

export default function useNonMobileHeaderShrunken() {
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

  return { nonMobileHeaderShrunken };
}
