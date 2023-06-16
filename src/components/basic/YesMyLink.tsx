import { forwardRef, type PropsWithChildren } from "react";
import { Link, type LinkProps } from "react-aria-components";

import { type NoFunctionalClassName } from "types/reactAriaHelper";

export type YesMyLinkProps = NoFunctionalClassName<LinkProps>;
export default function YesMyLink({
  className = "",
  ...props
}: YesMyLinkProps) {
  return (
    <Link
      className={`focus-ring-link cursor-pointer text-inherit underline outline-offset-2 [outline:2px_solid_transparent] data-[hovered]:decoration-2 ${className}`}
      {...props}
    />
  );
}

export const YesMyExternalLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<JSX.IntrinsicElements["a"]>
>(function YesMyExternalLink({ children, ...props }, ref) {
  return (
    <a ref={ref} target="_blank" rel="noopener" {...props}>
      {children}
    </a>
  );
});

export type YesMyLinkButtonProps = NoFunctionalClassName<LinkProps>;
export function YesMyLinkButton({
  className = "",
  ...props
}: YesMyLinkButtonProps) {
  return (
    <Link
      className={`rounded-sm bg-violet-200 px-4 py-1 font-bold text-violet-900 outline-none transition-colors data-[hovered]:bg-violet-300 data-[pressed]:bg-violet-400 data-[pressed]:text-[#421980] motion-reduce:transition-none ${className}`}
      {...props}
    />
  );
}
