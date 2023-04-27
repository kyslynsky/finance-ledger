import cn from "classnames";
import { NavLink } from "react-router-dom";
import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import Logo from "../../iconComponents/Logo";
import { Navigation } from "../../common/Navigation";

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <NavLink to="/" className={styles.headerLogo}>
        <Logo width={40} height={35} />
        <span>Finance</span>Ledger
      </NavLink>
      <Navigation />
    </header>
  );
};
