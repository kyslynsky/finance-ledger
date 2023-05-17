import cn from "classnames";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { PTag } from "../../common/PTag";
import { format } from "date-fns";
import SvgFb from "../../iconComponents/Fb";
import SvgTw from "../../iconComponents/Tw";
import SvgYt from "../../iconComponents/Yt";
import SvgIn from "../../iconComponents/In";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.socials}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          aria-label="Facebook"
          className={styles.socialLink}
        >
          <SvgFb width={35} height={35} className={styles.socialIcon} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          aria-label="Twitter"
          className={styles.socialLink}
        >
          <SvgTw width={35} height={35} className={styles.socialIcon} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          aria-label="YouTube"
          className={styles.socialLink}
        >
          <SvgYt width={35} height={35} className={styles.socialIcon} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          aria-label="LinkedIn"
          className={styles.socialLink}
        >
          <SvgIn width={35} height={35} className={styles.socialIcon} />
        </a>
      </div>
      <PTag>Copyright &copy; {format(new Date(), "yyyy")} - FinanceLedger</PTag>
    </footer>
  );
};
