import styled from "@emotion/styled";
import { PrivateRouteInfo } from "next/dist/shared/lib/router/router";
import { withRouter, Router } from "next/router";
import { useState, ReactNode } from "react";
import {
  Transition,
  TransitionGroup,
  TransitionStatus,
} from "react-transition-group";

export type PageChildren = (
  args: {
    Component: PrivateRouteInfo["Component"];
    pageProps: PrivateRouteInfo["props"];
  } | null
) => ReactNode;

export interface TransitionProps {
  router: Router;
  children: PageChildren;
}

const easeOut = "cubic-bezier(0.61, 1, 0.88, 1)";
const easeIn = "cubic-bezier(0.12, 0, 0.39, 0)";
const durationIn = 700;
const durationOut = 500;
const delayIn = 400;
const delayOut = 0;
const transitionIn = `clip-path ${durationIn}ms ${delayIn}ms ${easeOut}`;
const transitionOut = `clip-path ${durationOut}ms ${delayOut}ms ${easeIn}`;

const transitionStyle: Partial<
  Record<TransitionStatus, Record<string, unknown>>
> = {
  entering: {
    transition: transitionIn,
    // clip-path will be applied at next tick after transition starts
  },
  entered: {
    transition: "unset",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  exiting: {
    transition: transitionOut,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  exited: {
    transition: "unset",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
};

const TransitionInner = styled.div`
  top: 0;
  left: 0;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
`;

const TransitionWrapper = withRouter(
  // eslint-disable-next-line sonarjs/cognitive-complexity
  ({ children, router }: TransitionProps) => {
    const [currentRouters, setCurrentRouters] = useState([] as Router[]);
    if (
      currentRouters.length > 0 &&
      currentRouters.every((r) => r.pathname !== router.pathname)
    )
      setCurrentRouters([router]);

    if (currentRouters.length === 0) setCurrentRouters([router]);

    const [animating, setAnimating] = useState({} as Record<string, boolean>);
    const setAnimatingByName = (pathname: string, value: boolean) =>
      setAnimating((prev) => ({ ...prev, [pathname]: value }));
    const someAnimating = () => Object.values(animating).some((a) => a);
    const getScrollBarWidth = () => {
      return document.documentElement.style.getPropertyValue(
        "--scrollbar-width"
      );
    };

    return (
      <div
        style={{
          background: "black",
          width: "100%",
          height: someAnimating() ? "100vh" : "auto",
          overflowY: someAnimating() ? "hidden" : "unset",
          paddingRight: someAnimating() ? getScrollBarWidth() : "0",
        }}
      >
        <TransitionGroup component={null}>
          {currentRouters.map((item) => {
            const { Component, props } = item.components?.[item.pathname] || {};

            return (
              <Transition
                key={item.pathname}
                timeout={{
                  enter: durationIn + delayIn,
                  exit: durationOut + delayOut,
                }}
                mountOnEnter
                onEntering={(node: HTMLElement) => {
                  setAnimatingByName(item.pathname, true);
                  setTimeout(() => {
                    // eslint-disable-next-line no-param-reassign
                    node.style.clipPath =
                      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                  });
                }}
                onEntered={() => {
                  setAnimatingByName(item.pathname, false);
                }}
                onExiting={() => {
                  setAnimatingByName(item.pathname, true);
                }}
                onExited={() => {
                  setAnimatingByName(item.pathname, false);
                }}
              >
                {(state) => (
                  <TransitionInner
                    className={state}
                    style={{
                      position: animating[item.pathname] ? "fixed" : "static",
                      width: animating[item.pathname]
                        ? "calc(100% - var(--scrollbar-width))"
                        : "100%",
                      height: animating[item.pathname] ? "100vh" : "auto",

                      ...transitionStyle[state],
                    }}
                  >
                    {children(
                      Component
                        ? { Component, pageProps: props && props.pageProps }
                        : null
                    )}
                  </TransitionInner>
                )}
              </Transition>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
);

export const PageTransition = ({ children }: { children: PageChildren }) => {
  return <TransitionWrapper>{children}</TransitionWrapper>;
};
