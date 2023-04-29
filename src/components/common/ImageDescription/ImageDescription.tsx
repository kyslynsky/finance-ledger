import { IImageDescription } from "./ImageDescription.props";
import styles from "./ImageDescription.module.css";
import cn from "classnames";
import { PTag } from "../PTag";
import SvgClose from "../../iconComponents/Close";

export const ImageDescription = ({
  images,
  index,
  setIsOpen,
  className,
  ...props
}: IImageDescription): JSX.Element => {
  return (
    <div {...props} className={cn(styles.block, className)}>
      <div className={styles.caption}>
        <PTag>{images[index].description}</PTag>
        <span>
          <PTag>
            Image {index + 1} of&nbsp;
            {images.length}
          </PTag>
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={styles.closeBtn}
      >
        <SvgClose className={styles.closeIco} />
      </button>
    </div>
  );
};
