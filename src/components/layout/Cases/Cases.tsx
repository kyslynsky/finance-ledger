import styles from "./Cases.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";
import { picturesFactory } from "../../../helpers/picturesFactory";
import { images } from "../../../helpers/data/galleryData";
import { useState } from "react";
import Lightbox from "react-spring-lightbox";
import SvgNext from "../../iconComponents/Next";
import SvgPrev from "../../iconComponents/Prev";
import { ImageDescription } from "../../common/ImageDescription";
import { ModalNav } from "../../common/ModalNav";

export const Cases = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <Section className={styles.cases} id="cases">
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
          <li
            key={i}
            className={styles.picture}
            tabIndex={0}
            onClick={() => {
              setIsOpen(true);
              setCurrentIndex(i);
            }}
            onKeyDown={e => {
              if (e.code === "Enter") {
                setIsOpen(true);
              }
            }}
          >
            {img}
          </li>
        ))}
      </ul>

      {isOpen && <div className={styles.overlay}></div>}
      <Lightbox
        className={styles.imgModal}
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        onClose={() => setIsOpen(false)}
        renderImageOverlay={() => (
          <ImageDescription
            images={images}
            index={currentImageIndex}
            setIsOpen={setIsOpen}
          />
        )}
        renderPrevButton={() => (
          <ModalNav onClick={gotoPrevious} isDisabled={currentImageIndex <= 0}>
            <SvgPrev width={80} height={80} />
          </ModalNav>
        )}
        renderNextButton={() => (
          <ModalNav
            onClick={gotoNext}
            isDisabled={currentImageIndex + 1 === images.length}
          >
            <SvgNext width={80} height={80} />
          </ModalNav>
        )}
      />
    </Section>
  );
};

/* react-spring config for open/close animation */
// pageTransitionConfig={{
//   from: { transform: "scale(0.75)", opacity: 0 },
//   enter: { transform: "scale(1)", opacity: 1 },
//   leave: { transform: "scale(0.75)", opacity: 0 },
//   config: { mass: 1, tension: 320, friction: 32 }
// }}
