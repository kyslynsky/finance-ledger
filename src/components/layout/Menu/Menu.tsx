import cn from "classnames";
import { NavLink } from "react-router-dom";
import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import Logo from "../../iconComponents/Logo";
import { Navigation } from "../../common/Navigation";
import { useState, useEffect } from "react";

export const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia("(min-width: 767px)").matches
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", e => setMatches(e.matches));
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (matches) {
          setIsMobile(window.pageYOffset > 70);
        } else {
          setIsMobile(window.pageYOffset > 120);
        }
      });
    }
  }, [matches]);

  return (
    <header
      className={cn(className, styles.header, {
        [styles.fixed]: isMobile,
      })}
      {...props}
    >
      <NavLink to="/" className={styles.headerLogo}>
        <Logo width={40} height={35} />
        <span>Finance</span>Ledger
      </NavLink>
      <Navigation />
    </header>
  );
};