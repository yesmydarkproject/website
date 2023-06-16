import { Button, type ButtonProps } from "react-aria-components";

import { type NoFunctionalClassName } from "types/reactAriaHelper";

export type YesMyButtonProps = NoFunctionalClassName<ButtonProps>;
export default function YesMyButton({
  className = "",
  ...props
}: YesMyButtonProps) {
  return (
    <Button
      className={`rounded-sm bg-violet-200 px-4 py-1 font-bold text-violet-900 outline-none transition-colors data-[hovered]:bg-violet-300 data-[pressed]:bg-violet-400 data-[pressed]:text-[#421980] motion-reduce:transition-none ${className}`}
      {...props}
    />
  );
}
