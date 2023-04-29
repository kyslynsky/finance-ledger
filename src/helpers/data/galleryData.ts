import firstJpg from "./photos/cases1.jpg";
import firstWebp from "./photos/cases1.webp";
import firstJpg2 from "./photos/cases1@2x.jpg";
import firstWebp2 from "./photos/cases1@2x.webp";
import secondJpg from "./photos/cases2.jpg";
import secondJpg2 from "./photos/cases2@2x.jpg";
import secondWebp from "./photos/cases2.webp";
import secondWebp2 from "./photos/cases2@2x.webp";
import thirdJpg from "./photos/cases3.jpg";
import thirdJpg2 from "./photos/cases3@2x.jpg";
import thirdWebp from "./photos/cases3.webp";
import thirdWebp2 from "./photos/cases3@2x.webp";
import fourthJpg from "./photos/cases4.jpg";
import fourthJpg2 from "./photos/cases4@2x.jpg";
import fourthWebp from "./photos/cases4.webp";
import fourthWebp2 from "./photos/cases4@2x.webp";
import fifthJpg from "./photos/cases5.jpg";
import fifthJpg2 from "./photos/cases5@2x.jpg";
import fifthWebp from "./photos/cases5.webp";
import fifthWebp2 from "./photos/cases5@2x.webp";
import sixthJpg from "./photos/cases6.jpg";
import sixthJpg2 from "./photos/cases6@2x.jpg";
import sixthWebp from "./photos/cases6.webp";
import sixthWebp2 from "./photos/cases6@2x.webp";
import seventhJpg from "./photos/cases7.jpg";
import seventhJpg2 from "./photos/cases7@2x.jpg";
import seventhWebp from "./photos/cases7.webp";
import seventhWebp2 from "./photos/cases7@2x.webp";
import eighthJpg from "./photos/cases8.jpg";
import eighthJpg2 from "./photos/cases8@2x.jpg";
import eighthWebp from "./photos/cases8.webp";
import eighthWebp2 from "./photos/cases8@2x.webp";

export interface IPicture {
  srcwebp: string;
  src: string;
  srcjpg: string;
  srcjpg2x: string;
  alt: string;
  description?: string;
}

export const images: IPicture[] = [
  {
    srcjpg: firstJpg,
    srcjpg2x: firstJpg2,
    srcwebp: firstWebp,
    src: firstWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum",
  },
  {
    srcjpg: secondJpg,
    srcjpg2x: secondJpg2,
    srcwebp: secondWebp,
    src: secondWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Dolor sit",
  },
  {
    srcjpg: thirdJpg,
    srcjpg2x: thirdJpg2,
    srcwebp: thirdWebp,
    src: thirdWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit",
  },
  {
    srcjpg: fourthJpg,
    srcjpg2x: fourthJpg2,
    srcwebp: fourthWebp,
    src: fourthWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit",
  },
  {
    srcjpg: fifthJpg,
    srcjpg2x: fifthJpg2,
    srcwebp: fifthWebp,
    src: fifthWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit",
  },
  {
    srcjpg: sixthJpg,
    srcjpg2x: sixthJpg2,
    srcwebp: sixthWebp,
    src: sixthWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit",
  },
  {
    srcjpg: seventhJpg,
    srcjpg2x: seventhJpg2,
    srcwebp: seventhWebp,
    src: seventhWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit",
  },
  {
    srcjpg: eighthJpg,
    srcjpg2x: eighthJpg2,
    srcwebp: eighthWebp,
    src: eighthWebp2,
    alt: "Lorem ipsum dolor sit",
    description: "Ipsum dolor",
  },
];
