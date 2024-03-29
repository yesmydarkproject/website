import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

export type MyNextPage = NextPage;

export interface MyAppProps extends AppProps {
  Component: MyNextPage;
}

export type MyLayoutProps = {
  children: ReactElement;
  pageKey?: string;
};
export type MyLayout = (props: MyLayoutProps) => JSX.Element;
