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
import { useState } from "react";

export const Team = (): JSX.Element => {
  const [mouseOver, setMouseOver] = useState(false);

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
            <div className={styles.itemImg}>{picturesFactory(item.images)}</div>

            {item.socials.map((s, i) => (
              <ul className={styles.teamSocials} key={i}>
                <li>
                  <a href={s.facebook} target="blank">
                    <SvgFb className={styles.socialIco} />
                  </a>
                </li>
                <li>
                  <a href={s.twitter} target="blank">
                    <SvgTw className={styles.socialIco} />
                  </a>
                </li>
                <li>
                  <a href={s.youtube} target="blank">
                    <SvgYt className={styles.socialIco} />
                  </a>
                </li>
                <li>
                  <a href={s.linkedin} target="blank">
                    <SvgIn className={styles.socialIco} />
                  </a>
                </li>
              </ul>
            ))}

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
