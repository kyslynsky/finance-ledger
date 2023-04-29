import { IPicture } from "./gallery/galleryData";

export const picturesFactory = (images: IPicture[]): JSX.Element[] => {
  return images.map(i => (
    <picture key={i.srcJpg}>
      <source srcSet={(i.srcWebp.concat(" 1x"), i.src.concat(" 2x"))} />
      <source srcSet={(i.srcJpg.concat(" 1x"), i.srcJpg2x.concat(" 2x"))} />

      <img src={i.srcJpg} alt={i.alt} />
    </picture>
  ));
};
