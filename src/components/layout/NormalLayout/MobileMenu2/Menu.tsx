import { useRef } from "react";
import { useMenu, type AriaMenuProps } from "react-aria";
import { useTreeState } from "react-stately";

import { MenuItem } from "./MenuItem";
import { MenuSection } from "./MenuSection";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuProps<T> extends AriaMenuProps<T> {}

export function Menu<T extends object>(props: MenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props);

  // Get props for the menu element
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <nav>
      <ul {...menuProps} ref={ref} className="m-0 list-none p-0">
        {Array.from(state.collection).map((item) =>
          item.type === "section" ? (
            <MenuSection key={item.key} section={item} state={state} />
          ) : (
            <MenuItem key={item.key} item={item} state={state} />
          )
        )}
      </ul>
    </nav>
  );
}
