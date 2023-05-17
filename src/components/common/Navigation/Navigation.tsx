import cn from "classnames";
import { NavigationProps } from "./Navigation.props";
import styles from "./Navigation.module.css";
import { navItems } from "../../../helpers/navItems";
import { KeyboardEvent, MouseEvent, useState } from "react";
import { scrollIntoViewWithOffset } from "../../../helpers/scrollIntoView";

export const Navigation = ({
  matches,
  className,
  scroller,
  handleHomeClick,
  ...props
}: NavigationProps): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    const sectionRef = document.getElementById(id);
    if (sectionRef) {
      scrollIntoViewWithOffset(`#${sectionRef.id}`, offSet);
    }
  };

  let offSet = 0;

  if (!matches) {
    offSet = 120;
  } else {
    offSet = 92;
  }

  return (
    <nav className={cn(className, styles.nav)} {...props}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a
            aria-label="Home Top"
            tabIndex={0}
            onClick={scroller}
            onKeyDown={e => handleHomeClick(e)}
          >
            Home
          </a>
        </li>
        {navItems.map(i => (
          <li key={i.id} className={styles.navItem}>
            <a
              aria-label={i.name}
              aria-current={activeLink === i.route ? "page" : undefined}
              href={`/${i.route}`}
              tabIndex={0}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleLinkClick(e.currentTarget.innerHTML.toLowerCase());
              }}
              onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) => {
                if (e.code === "Enter") {
                  handleLinkClick(e.currentTarget.innerHTML.toLowerCase());
                }
              }}
            >
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
