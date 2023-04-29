import { ModalNavProps } from "./ModalNav.props";
import styles from "./ModalNav.module.css";
import cn from "classnames";

export const ModalNav = ({
  onClick,
  isDisabled,
  className,
  children,
  ...props
}: ModalNavProps): JSX.Element => {
  return (
    <button
      type="button"
      {...props}
      onClick={onClick}
      className={cn(styles.button, className, {
        [styles.disabled]: isDisabled,
      })}
    >
      {children}
    </button>
  );
};
