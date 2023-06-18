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
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  const focusedColor = isFocused ? "white" : "black";

  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        background: isFocused ? "gray" : "transparent",
        color: isDisabled ? "gray" : focusedColor,
        padding: "2px 5px",
        outline: "none",
        cursor: "default",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}
