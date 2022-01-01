export interface NavItem {
  text: string;
  href: string;
  group: "OFFICIAL" | "FUN";
}
export const navItems: NavItem[] = [
  { text: "La+Profile", href: "/profile", group: "OFFICIAL" },
  { text: "La+News", href: "/", group: "OFFICIAL" },
  { text: "La+Archives", href: "/", group: "OFFICIAL" },
  { text: "La+Works", href: "/", group: "OFFICIAL" },
  { text: "+mate ARTS", href: "/", group: "FUN" },
  { text: "+mate LINKS", href: "/", group: "FUN" },
];
