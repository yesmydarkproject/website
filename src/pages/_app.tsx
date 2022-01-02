/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import type { ReactElement, ReactNode } from "react";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import { GoogleAnalyticsScripts } from "shared/libs/gtag";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

type MyNextPage = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: MyNextPage;
}

const clipVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { delay: 0.4, duration: 0.7, ease: "easeOut" },
  },
  clipToTop: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: { delay: 0, duration: 0.5, ease: "easeIn" },
  },
  clipToBottom: {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
};

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const getLayout =
    Component.getLayout ??
    (() => (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ));

  const [transiting, setTransiting] = useState({} as Record<string, boolean>);
  const setTransitingByName = (key: string | undefined, value: boolean) =>
    setTransiting((prev) => ({ ...prev, [key || "0"]: value }));
  const isTransiting = (key: string | undefined) => transiting[key || "0"];
  const someTransiting = () =>
    Object.values(transiting).some((t) => t === true);

  useEffect(() => {
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setHeight);
    setHeight();

    const setScrollBarWidth = () => {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${window.innerWidth - document.body.clientWidth}px`
      );
    };
    window.addEventListener("resize", setScrollBarWidth);
    setScrollBarWidth();

    return () => {
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("resize", setScrollBarWidth);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <GoogleAnalyticsScripts />
        <div
          style={{
            background: "black",
            width: "100%",
            height: someTransiting() ? "100vh" : "auto",
            overflowY: someTransiting() ? "hidden" : "unset",
            paddingRight: someTransiting() ? "var(--scrollbar-width)" : "0",
          }}
        >
          <LazyMotion features={domAnimation}>
            <AnimatePresence initial={false}>
              <m.div
                style={{
                  position: isTransiting(Component.displayName)
                    ? "fixed"
                    : "static",
                  top: 0,
                  left: 0,
                  width: isTransiting(Component.displayName)
                    ? "calc(100% - var(--scrollbar-width))"
                    : "100%",
                  height: isTransiting(Component.displayName)
                    ? "100vh"
                    : "auto",
                }}
                key={Component.displayName}
                initial="clipToBottom"
                animate="visible"
                exit="clipToTop"
                variants={clipVariants}
                onAnimationStart={() => {
                  setTransitingByName(Component.displayName, true);
                }}
                onAnimationComplete={() => {
                  setTransitingByName(Component.displayName, false);
                }}
              >
                {getLayout(<Component {...pageProps} />)}
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </div>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
