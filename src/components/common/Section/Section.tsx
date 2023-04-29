import cn from "classnames";
import { SectionProps } from "./Section.props";

export const Section = ({
  children,
  className,
  ...props
}: SectionProps): JSX.Element => {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  );
};
