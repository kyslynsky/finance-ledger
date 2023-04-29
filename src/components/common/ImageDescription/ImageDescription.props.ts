import { IPicture } from "../../../helpers/data/galleryData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IImageDescription
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: IPicture[];
  index: number;
  setIsOpen: (arg: boolean) => void;
}
