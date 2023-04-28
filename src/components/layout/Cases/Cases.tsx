import styles from "./Cases.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";

import { picturesFactory } from "../../../helpers/picturesFactory";
import { images } from "../../../helpers/gallery/galleryData";

export const Cases = (): JSX.Element => {
  return (
    <Section className={styles.cases}>
      <div className={styles.description}>
        <PTag size="s">This is what we do</PTag>
        <HTag tag="h2">Business Cases</HTag>
        <PTag size="s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </PTag>
      </div>
      <ul className={styles.gallery}>
        {picturesFactory(images).map((img, i) => (
          <li key={i} className={styles.picture}>
            {img}
          </li>
        ))}
      </ul>
    </Section>
  );
};
