import styles from "./Cases.module.css";
import { Section } from "../../common/Section";
import { HTag } from "../../common/HTag";
import { PTag } from "../../common/PTag";
import { picturesFactory } from "../../../helpers/picturesFactory";
import { images } from "../../../helpers/gallery/galleryData";
import { useState } from "react";
import Lightbox from "react-spring-lightbox";
import SvgClose from "../../iconComponents/Close";
import SvgNext from "../../iconComponents/Next";
import SvgPrev from "../../iconComponents/Prev";

export const Cases = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

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

      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        onClose={() => setIsOpen(false)}
        renderImageOverlay={() => (
          <div>
            <PTag color="black">{images[currentImageIndex].description}</PTag>
            <PTag color="black">
              Image {currentImageIndex + 1} of&nbsp;
              {images.length}
            </PTag>
            <SvgClose
              style={{ zIndex: 1 }}
              onClick={() => setIsOpen(false)}
              width={65}
              height={65}
              stroke="#000"
            />
          </div>
        )}
        renderPrevButton={() => (
          <SvgPrev
            style={{ zIndex: 1 }}
            onClick={gotoPrevious}
            width={80}
            height={80}
            stroke="#000"
          />
        )}
        renderNextButton={() => (
          <SvgNext
            style={{ zIndex: 1 }}
            onClick={gotoNext}
            width={80}
            height={80}
            stroke="#000"
          />
        )}
        renderFooter={() => <div>Overlay</div>}
      />
    </Section>
  );
};

/* Add your own UI */
// renderHeader={() => (<CustomHeader />)}
// renderFooter={() => (<CustomFooter />)}
// renderPrevButton={() => (<CustomLeftArrowButton />)}
// renderNextButton={() => (<CustomRightArrowButton />)}
//renderImageOverlay={() => (<ImageOverlayComponent >)}

/* Add styling */
// className="cool-class"
// style={{ background: "grey" }}

/* Use single or double click to zoom */
// singleClickToZoom

/* react-spring config for open/close animation */
// pageTransitionConfig={{
//   from: { transform: "scale(0.75)", opacity: 0 },
//   enter: { transform: "scale(1)", opacity: 1 },
//   leave: { transform: "scale(0.75)", opacity: 0 },
//   config: { mass: 1, tension: 320, friction: 32 }
// }}
