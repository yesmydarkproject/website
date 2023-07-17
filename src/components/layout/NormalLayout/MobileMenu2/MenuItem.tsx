import { useRef } from "react";
import { useMenuItem } from "react-aria";
import { type Node, type TreeState } from "react-stately";

export interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

export function MenuItem<T>({ item, state }: MenuItemProps<T>) {
  // Get props for the menu item element
  const ref = useRef(null);
  const { menuItemProps, isFocused } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className="px-[1rem] py-1 text-[1.2rem] font-bold leading-[2] text-violet-100  outline-none"
      data-focus-visible={isFocused}
    >
      {item.rendered}
      {/* {isSelected && <span aria-hidden="true">✅</span>} */}
    </li>
  );
}
