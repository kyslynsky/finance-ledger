import { IPicture } from "./data/galleryData";

export const picturesFactory = (images: IPicture[]): JSX.Element[] => {
  return images.map(i => (
    <picture key={i.srcjpg}>
      <source srcSet={(i.srcwebp.concat(" 1x"), i.src.concat(" 2x"))} />
      <source srcSet={(i.srcjpg.concat(" 1x"), i.srcjpg2x.concat(" 2x"))} />

      <img src={i.srcjpg} alt={i.alt} />
    </picture>
  ));
};
