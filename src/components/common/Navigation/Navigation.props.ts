import { DetailedHTMLProps, HTMLAttributes, KeyboardEvent } from "react";

export interface NavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  matches: boolean;
  scroller?: () => void;
  handleHomeClick: (e: KeyboardEvent) => void;
}
