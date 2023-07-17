import { type ReactNode } from "react";

export type NoFunctionalClassName<
  RenderProps extends {
    children?: ReactNode | ((values: never) => ReactNode);
  }
> = Omit<RenderProps, "className"> & {
  className?: string;
};
