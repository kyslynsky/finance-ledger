import { ReactNode, DetailedHTMLProps } from "react";

export interface ModalNavProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick: () => false | void;
  isDisabled?: boolean;
}
