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
          <li key={item.id} tabIndex={0} className={styles.item}>
            <div className={styles.itemImg}>
              {picturesFactory(item.images)}

              <div className={styles.itemHover}>
                {item.socials.map((s, i) => (
                  <div className={styles.socialIcons} key={i}>
                    <a
                      href={s.facebook}
                      target="blank"
                      className={styles.socialLink}
                    >
                      <SvgFb className={styles.socialIco} />
                    </a>

                    <a
                      href={s.twitter}
                      target="blank"
                      className={styles.socialLink}
                    >
                      <SvgTw className={styles.socialIco} />
                    </a>

                    <a
                      href={s.youtube}
                      target="blank"
                      className={styles.socialLink}
                    >
                      <SvgYt className={styles.socialIco} />
                    </a>

                    <a
                      href={s.linkedin}
                      target="blank"
                      className={styles.socialLink}
                    >
                      <SvgIn className={styles.socialIco} />
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
