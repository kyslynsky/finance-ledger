import firstJpg from "./team/person1.jpg";
import firstWebp from "./team/person1.webp";
import firstJpg2 from "./team/person1@2x.jpg";
import firstWebp2 from "./team/person1@2x.webp";
import secondJpg from "./team/person2.jpg";
import secondJpg2 from "./team/person2@2x.jpg";
import secondWebp from "./team/person2.webp";
import secondWebp2 from "./team/person2@2x.webp";
import thirdJpg from "./team/person3.jpg";
import thirdJpg2 from "./team/person3@2x.jpg";
import thirdWebp from "./team/person3.webp";
import thirdWebp2 from "./team/person3@2x.webp";

import { IPicture } from "./galleryData";

export interface ISocials {
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
}

export interface IPerson {
  id: number;
  fullname: string;
  role: string;
  images: IPicture[];
  socials: ISocials[];
}

export const teamData: IPerson[] = [
  {
    id: 1,
    fullname: "Jonh Doe",
    role: "President",
    images: [
      {
        srcjpg: firstJpg,
        srcjpg2x: firstJpg2,
        srcwebp: firstWebp,
        src: firstWebp2,
        alt: "Jonh Doe President",
      },
    ],
    socials: [
      {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "youtube.com",
        linkedin: "linkedin.com",
      },
    ],
  },
  {
    id: 2,
    fullname: "Jane Doe",
    role: "Vice President",
    images: [
      {
        srcjpg: secondJpg,
        srcjpg2x: secondJpg2,
        srcwebp: secondWebp,
        src: secondWebp2,
        alt: "Jane Doe Vice President",
      },
    ],
    socials: [
      {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "youtube.com",
        linkedin: "linkedin.com",
      },
    ],
  },
  {
    id: 3,
    fullname: "Steve Smith",
    role: "Marketing Head",
    images: [
      {
        srcjpg: thirdJpg,
        srcjpg2x: thirdJpg2,
        srcwebp: thirdWebp,
        src: thirdWebp2,
        alt: "Steve Smith Marketing Head",
      },
    ],
    socials: [
      {
        facebook: "facebook.com",
        twitter: "twitter.com",
        youtube: "youtube.com",
        linkedin: "linkedin.com",
      },
    ],
  },
];
