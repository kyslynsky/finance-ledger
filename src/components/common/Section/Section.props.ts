import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
}
