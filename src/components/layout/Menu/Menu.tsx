import cn from "classnames";
import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import Logo from "../../iconComponents/Logo";
import { Navigation } from "../../common/Navigation";
import { useState, useEffect, KeyboardEvent } from "react";

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

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      e.preventDefault();
      scrollTop();
    }
  };

  return (
    <header
      className={cn(className, styles.header, {
        [styles.fixed]: isMobile,
      })}
      {...props}
    >
      <a
        aria-label="Home Top"
        onClick={() => scrollTop()}
        onKeyDown={(e: KeyboardEvent) => {
          handleKeyDown(e);
        }}
        className={styles.headerLogo}
        tabIndex={1}
      >
        <Logo width={40} height={35} />
        <span>Finance</span>Ledger
      </a>
      <Navigation
        matches={matches}
        scroller={scrollTop}
        handleHomeClick={handleKeyDown}
      />
    </header>
  );
};
