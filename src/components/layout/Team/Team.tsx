import styles from "./Team.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";
import { picturesFactory } from "../../../helpers/picturesFactory";
import { teamData } from "../../../helpers/data/teamData";
import SvgFb from "../../iconComponents/Fb";
import SvgTw from "../../iconComponents/Tw";
import SvgYt from "../../iconComponents/Yt";
import SvgIn from "../../iconComponents/In";

export const Team = (): JSX.Element => {
  return (
    <Section className={styles.team}>
      <div className={styles.description}>
        <PTag size="s">Who we are</PTag>
        <HTag tag="h2">Our Professional Team</HTag>
        <PTag size="s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </PTag>
      </div>
      <ul className={styles.teamGallery}>
        {teamData.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemImg}>
              {picturesFactory(item.images)}

              <div
                className={styles.itemHover}
                tabIndex={0}
                aria-label={item.fullname}
              >
                {item.socials.map((s, i) => (
                  <div className={styles.socialIcons} key={i} tabIndex={-1}>
                    <a
                      tabIndex={0}
                      href={s.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className={styles.socialLink}
                    >
                      <SvgFb className={styles.socialIco} tabIndex={-1} />
                    </a>

                    <a
                      tabIndex={0}
                      href={s.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className={styles.socialLink}
                    >
                      <SvgTw className={styles.socialIco} tabIndex={-1} />
                    </a>

                    <a
                      tabIndex={0}
                      href={s.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className={styles.socialLink}
                    >
                      <SvgYt className={styles.socialIco} tabIndex={-1} />
                    </a>

                    <a
                      tabIndex={0}
                      href={s.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className={styles.socialLink}
                    >
                      <SvgIn className={styles.socialIco} tabIndex={-1} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <PTag size="m" color="black" className={styles.fullname}>
              {item.fullname}
            </PTag>
            <PTag color="black">{item.role}</PTag>
          </li>
        ))}
      </ul>
    </Section>
  );
};
