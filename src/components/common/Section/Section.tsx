import cn from "classnames";
import { SectionProps } from "./Section.props";
import styles from "./Section.module.css";

export const Section = ({
  width = "containered",
  children,
  className,
  ...props
}: SectionProps): JSX.Element => {
  return (
    <section
      className={cn(className, {
        [styles.sectionContainer]: width === "containered",
        [styles.sectionFull]: width === "full",
      })}
      {...props}
    >
      {children}
    </section>
  );
};
