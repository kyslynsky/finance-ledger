import cn from "classnames";
import { NavLink } from "react-router-dom";
import { NavigationProps } from "./Navigation.props";
import styles from "./Navigation.module.css";
import { navItems } from "../../../helpers/navItems";

export const Navigation = ({
  className,
  ...props
}: NavigationProps): JSX.Element => {
  return (
    <nav className={cn(className, styles.nav)} {...props}>
      <ul className={styles.navList}>
        {navItems.map(i => (
          <li key={i.id} className={styles.navItem}>
            <NavLink to={i.route}>{i.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
