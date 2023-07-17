import { useMenuSection, useSeparator } from "react-aria";
import { type Node, type TreeState } from "react-stately";

import { MenuItem } from "./MenuItem";

export interface MenuSectionProps<T> {
  section: Node<T>;
  state: TreeState<T>;
}

export function MenuSection<T>({ section, state }: MenuSectionProps<T>) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          style={{
            borderTop: "1px solid gray",
            margin: "2px 5px",
          }}
        />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              padding: "2px 5px",
            }}
          >
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: "none",
          }}
        >
          {Array.from(section.childNodes).map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}
