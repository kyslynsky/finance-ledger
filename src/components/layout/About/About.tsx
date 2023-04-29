import styles from "./About.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { Button } from "../../common/Button";
import { PTag } from "../../common/PTag";

export const About = (): JSX.Element => {
  return (
    <Section className={styles.aboutSection} id="about">
      <div className={styles.aboutBg}></div>
      <div className={styles.aboutDesc}>
        <PTag size="s">What you are looking for</PTag>
        <HTag tag="h2">We provide bespoke&nbsp;solutions</HTag>
        <PTag size="s" className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </PTag>
        <Button appearence="green">Read More</Button>
      </div>
    </Section>
  );
};
