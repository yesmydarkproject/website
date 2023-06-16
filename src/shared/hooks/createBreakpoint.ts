// Based on https://github.com/streamich/react-use/blob/325f5bd69904346788ea981ec18bfc7397c611df/src/factory/createBreakpoint.ts
// and the suggestions from https://github.com/streamich/react-use/pull/1508
// (The Unlicense) https://github.com/streamich/react-use/blob/325f5bd69904346788ea981ec18bfc7397c611df/LICENSE

import { useEffect, useState } from "react";

type Breakpoints = Record<string, number>;

const createBreakpoint =
  <T extends Breakpoints>(breakpoints: T): (() => keyof T | null) =>
  () => {
    const [screen, setScreen] = useState(-1);

    useEffect(() => {
      const setSideScreen = (): void => {
        setScreen(window.innerWidth);
      };
      setSideScreen();
      window.addEventListener("resize", setSideScreen);
      return () => {
        window.removeEventListener("resize", setSideScreen);
      };
    }, []);

    const sortedBreakpoints = Object.entries(breakpoints).sort((a, b) =>
      a[1] >= b[1] ? 1 : -1
    );

    return screen < 0
      ? null
      : sortedBreakpoints.reduce((acc, [name, width]) => {
          if (screen >= width) {
            return name;
          }
          return acc;
        }, sortedBreakpoints[0][0]);
  };

export default createBreakpoint;
