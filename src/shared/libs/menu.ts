export interface NavItem {
  text: string;
  href: string;
  group: "OFFICIAL" | "FUN";
}
export const navItems: NavItem[] = [
  { text: "La+Profile", href: "/profile", group: "OFFICIAL" },
  { text: "La+News", href: "/news", group: "OFFICIAL" },
  { text: "La+Archives", href: "/archives", group: "OFFICIAL" },
  { text: "La+Works", href: "/works", group: "OFFICIAL" },
  { text: "+mate ARTS", href: "/fan/arts", group: "FUN" },
  { text: "+mate LINKS", href: "/fan/links", group: "FUN" },
];
