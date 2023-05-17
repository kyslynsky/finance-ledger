import styles from "./Hero.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { Button } from "../../common/Button";

export const Hero = (): JSX.Element => {
  return (
    <Section className={styles.heroSection}>
      <HTag tag="h1">The Sky Is The Limit</HTag>
      <HTag tag="h3">We provide world class financial assistance</HTag>
      <Button
        type="button"
        appearence="primary"
        arrow="rigth"
        aria-label="Read More"
      >
        Read More
      </Button>
    </Section>
  );
};
