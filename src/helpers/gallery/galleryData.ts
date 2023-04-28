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
  srcWebp: string;
  srcWebp2x: string;
  srcJpg: string;
  srcJpg2x: string;
  alt: string;
}

export const images: IPicture[] = [
  {
    srcJpg: firstJpg,
    srcJpg2x: firstJpg2,
    srcWebp: firstWebp,
    srcWebp2x: firstWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: secondJpg,
    srcJpg2x: secondJpg2,
    srcWebp: secondWebp,
    srcWebp2x: secondWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: thirdJpg,
    srcJpg2x: thirdJpg2,
    srcWebp: thirdWebp,
    srcWebp2x: thirdWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: fourthJpg,
    srcJpg2x: fourthJpg2,
    srcWebp: fourthWebp,
    srcWebp2x: fourthWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: fifthJpg,
    srcJpg2x: fifthJpg2,
    srcWebp: fifthWebp,
    srcWebp2x: fifthWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: sixthJpg,
    srcJpg2x: sixthJpg2,
    srcWebp: sixthWebp,
    srcWebp2x: sixthWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: seventhJpg,
    srcJpg2x: seventhJpg2,
    srcWebp: seventhWebp,
    srcWebp2x: seventhWebp2,
    alt: "Lorem ipsum dolor sit",
  },
  {
    srcJpg: eighthJpg,
    srcJpg2x: eighthJpg2,
    srcWebp: eighthWebp,
    srcWebp2x: eighthWebp2,
    alt: "Lorem ipsum dolor sit",
  },
];
