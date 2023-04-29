interface InavItems {
  id: number;
  name: string;
  route: string;
}

export const navItems: InavItems[] = [
  { id: 1, name: "About", route: "about" },
  { id: 2, name: "Cases", route: "cases" },
  { id: 3, name: "Blog", route: "blog" },
  { id: 4, name: "Contact", route: "contact" },
];
