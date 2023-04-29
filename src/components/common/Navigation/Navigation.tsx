import cn from "classnames";
import { NavigationProps } from "./Navigation.props";
import styles from "./Navigation.module.css";
import { navItems } from "../../../helpers/navItems";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navigation = ({
  className,
  ...props
}: NavigationProps): JSX.Element => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={cn(className, styles.nav)} {...props}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to={"top"} onClick={scrollTop}>
            Home
          </Link>
        </li>
        {navItems.map(i => (
          <li key={i.id} className={styles.navItem}>
            <Link to={i.route} spy={true} smooth={true} offset={-120}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
