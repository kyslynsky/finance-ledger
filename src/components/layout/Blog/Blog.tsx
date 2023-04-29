import styles from "./Blog.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { Button } from "../../common/Button";
import { PTag } from "../../common/PTag";

export const Blog = (): JSX.Element => {
  return (
    <Section className={styles.blogSection} id="blog">
      <div className={styles.blogBg}></div>
      <div className={styles.blogDesc}>
        <PTag size="s">April 16 2020</PTag>
        <HTag tag="h2">Blog Post One</HTag>
        <PTag size="s" className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </PTag>
        <Button appearence="blue">Read Our Blog</Button>
      </div>
    </Section>
  );
};
