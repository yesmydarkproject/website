/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect /* useRef, useState */ } from "react";
import type { ReactElement, ReactNode } from "react";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import { PageTransition } from "components/pageTransition";
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

const MyApp = ({
  Component: SsrComponent,
  pageProps: ssrPageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const getLayout = (
    Component: MyAppProps["Component"],
    pageProps: MyAppProps["pageProps"]
  ) =>
    Component?.getLayout ??
    (() => (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ));

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
        <PageTransition>
          {(args) => {
            if (args && args.Component) {
              const { Component, pageProps } = args;
              return getLayout(
                Component,
                pageProps ?? {}
              )(<Component {...pageProps} />);
            }
            return getLayout(
              SsrComponent,
              ssrPageProps
            )(<SsrComponent {...ssrPageProps} />);
          }}
        </PageTransition>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
