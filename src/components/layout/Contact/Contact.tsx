import styles from "./Contact.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { ContactForm } from "../../common/ContactForm";

export const Contact = (): JSX.Element => {
  return (
    <Section className={styles.contactSection} id="contact">
      <div className={styles.contactBg}></div>
      <div className={styles.wrapper}>
        <HTag tag="h2">Request Callback</HTag>
        <ContactForm className={styles.contactForm} />
      </div>
    </Section>
  );
};
