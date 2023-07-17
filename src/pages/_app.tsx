/* eslint-disable react/jsx-props-no-spreading */
import styled from "@emotion/styled";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect, useState, useRef, useCallback } from "react";
import { SSRProvider, I18nProvider, useLocale } from "react-aria";

import defaultSEOConfig from "../../next-seo.config";
import NormalLayout from "components/layout/NormalLayout";
import SuperIndexLayout from "components/layout/SuperIndexLayout";
import TheLaplusCross from "components/TheLaplusCross";
import { GoogleAnalyticsScripts } from "shared/libs/gtag";
import { type MyAppProps } from "types/next";
import "styles/globals.css";

const FoundationBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: black;
  z-index: -1;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
`;

const MotionedAppAnimationOverlay = motion(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #18112c;
  z-index: 5000;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  place-content: center;
  place-items: center;
`);

const MotionedAppAnimationOverlayInner = motion(styled.div`
  opacity: 0;
`);

const getLayoutKey = (path: string) =>
  path === "/" ? "superindex" : "normalindex";

const MyApp = ({ Component, pageProps, router }: MyAppProps) => {
  const { locale, direction } = useLocale();

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.lang = locale;
      html.dir = direction;
    }
  }, [direction, locale]);

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setHeight);
    setHeight();

    const setScrollBarWidth = setInterval(() => {
      const prev = document.documentElement.style
        .getPropertyValue("--scrollbar-width")
        .split("px")[0];
      const prevNum = Number.parseInt(prev, 10);
      const w = window.innerWidth - document.body.clientWidth;
      if (Number.isNaN(prevNum) || prevNum !== w)
        document.documentElement.style.setProperty(
          "--scrollbar-width",
          `${w}px`
        );
    }, 100);

    return () => {
      window.removeEventListener("resize", setHeight);

      clearInterval(setScrollBarWidth);
    };
  }, []);

  const pageKey = router.asPath;
  const isSuperIndexLayout = pageKey === "/";
  const isNormalLayout = !isSuperIndexLayout;
  const layoutKey = getLayoutKey(pageKey);

  const [routingState, setRoutingState] = useState<"STARTED" | "COMPLETED">(
    "COMPLETED"
  );

  const overlayInnerRef = useRef<HTMLDivElement | null>(null);
  const ovarlayAnimating = useRef(false);
  const waitForAnimation = useCallback(
    () =>
      new Promise<void>((resolve) => {
        const handler = () => {
          if (!ovarlayAnimating.current) {
            resolve();
            return;
          }
          setTimeout(handler, 100);
        };
        handler();
      }),
    []
  );

  useEffect(() => {
    const start = async (newPath: string) => {
      const newLayoutKey = getLayoutKey(newPath);
      if (layoutKey === newLayoutKey) return;

      await waitForAnimation();
      ovarlayAnimating.current = true;
      setRoutingState("STARTED");
    };
    router.events.on("routeChangeStart", start);
    return () => {
      router.events.off("routeChangeStart", start);
    };
  }, [layoutKey, router.events, waitForAnimation]);

  useEffect(() => {
    const completed = async () => {
      if (routingState !== "STARTED") return;

      await waitForAnimation();
      ovarlayAnimating.current = true;
      setRoutingState("COMPLETED");
    };
    router.events.on("routeChangeComplete", completed);
    return () => {
      router.events.off("routeChangeComplete", completed);
    };
  }, [router.events, routingState, waitForAnimation]);

  useEffect(() => {
    const error = () => {
      ovarlayAnimating.current = false;
      setRoutingState("COMPLETED");
    };
    router.events.on("routeChangeError", error);
    return () => {
      router.events.off("routeChangeError", error);
    };
  }, [router.events]);

  const [overlayScope, overlayAnimate] = useAnimate();

  useEffect(() => {
    if (!overlayScope.current || !overlayInnerRef.current) {
      return;
    }

    overlayAnimate(
      routingState === "STARTED"
        ? [
            [
              overlayScope.current,
              { clipPath: "circle(100%)" },
              { duration: 1.2, ease: [0.04, 0.87, 0.46, 1] },
            ],
            [
              overlayInnerRef.current,
              { opacity: 1, scale: 1 },
              { duration: 1.2, ease: [0.04, 0.87, 0.46, 1], at: "<" },
            ],
          ]
        : [
            [
              overlayInnerRef.current,
              { opacity: 0 },
              { duration: 1.2, ease: [0.04, 0.87, 0.46, 1] },
            ],
            [
              overlayScope.current,
              { clipPath: "circle(0)" },
              { duration: 0.8, ease: [0.64, 0.47, 0.46, 1], at: "<" },
            ],
          ]
    ).then(
      () => {
        ovarlayAnimating.current = false;
      },
      () => {
        // Rejected
        ovarlayAnimating.current = false;
      }
    );
  }, [overlayAnimate, overlayScope, routingState]);

  return (
    <SSRProvider>
      <I18nProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <GoogleAnalyticsScripts />
        <FoundationBlack />
        <div>
          <AnimatePresence mode="wait">
            {isSuperIndexLayout && (
              <SuperIndexLayout key="superindex">
                <Component {...pageProps} />
              </SuperIndexLayout>
            )}
            {isNormalLayout && (
              <NormalLayout key="normallayout">
                <Component {...pageProps} />
              </NormalLayout>
            )}
          </AnimatePresence>
          <MotionedAppAnimationOverlay
            ref={overlayScope}
            initial={{ clipPath: "circle(0)" }}
          >
            <MotionedAppAnimationOverlayInner
              ref={overlayInnerRef}
              initial={{ scale: 0 }}
            >
              <TheLaplusCross />
            </MotionedAppAnimationOverlayInner>
          </MotionedAppAnimationOverlay>
        </div>
      </I18nProvider>
    </SSRProvider>
  );
};

export default MyApp;
