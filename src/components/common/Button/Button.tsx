import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import Arrow from "../../iconComponents/Arrow";

export const Button = ({
  appearence,
  arrow = "none",
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearence === "primary",
        [styles.green]: appearence === "green",
        [styles.blue]: appearence === "blue",
      })}
      {...props}
    >
      {arrow !== "none" && <Arrow width={9} height={18} />}
      {children}
    </button>
  );
};
