import { Icon } from "./enums";

export interface Project {
  id: number;
  title: string;
  intro: string;
  slug: string;
  des: string;
  img: string;
  htmlDes?: string;
  iconLists: Icon[];
  link?: string;
  linkCode?: string;
  previewsThumbnail: string[];
  year: number;
}

export type IconLink = {
  url: string;
  name: string;
};

export const iconLinks: { [key in Icon]: IconLink } = {
  [Icon.GSAP]: { url: "https://greensock.com/gsap/", name: "GSAP" },
  [Icon.REACT]: { url: "https://reactjs.org/", name: "React" },
  [Icon.TYPESCRIPT]: {
    url: "https://www.typescriptlang.org/",
    name: "TypeScript",
  },
  [Icon.THREE_JS]: { url: "https://threejs.org/", name: "Three.js" },
  [Icon.TAILWIND_CSS]: {
    url: "https://tailwindcss.com/",
    name: "Tailwind CSS",
  },
  [Icon.SYMFONY]: { url: "https://symfony.com/", name: "Symfony" },
  [Icon.LARAVEL]: { url: "https://laravel.com/", name: "Laravel" },
  [Icon.JAVASCRIPT]: {
    url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    name: "Javascript",
  },
  [Icon.EXPRESS]: {
    url: "https://expressjs.com/",
    name: "Express",
  },
  [Icon.MONGODB]: {
    url: "https://www.mongodb.com/fr-fr",
    name: "MongoDB",
  },
  [Icon.NODEJS]: {
    url: "https://nodejs.org/fr",
    name: "Node JS",
  },
  [Icon.CSHARP]: {
    url: "https://learn.microsoft.com/fr-fr/dotnet/csharp/",
    name: "C#",
  },
  [Icon.UNITY]: {
    url: "https://unity.com/fr",
    name: "Unity",
  },
};

export interface SoftSkills {
  title: string;
  desc: string;
}
