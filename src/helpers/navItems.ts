interface InavItems {
  id: number;
  name: string;
  route: string;
}

export const navItems: InavItems[] = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About", route: "#about" },
  { id: 3, name: "Cases", route: "#cases" },
  { id: 4, name: "Blog", route: "#blog" },
  { id: 5, name: "Contact", route: "#contact" },
];
