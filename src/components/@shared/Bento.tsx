import { slugs } from "@/data/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import IconCloud from "../ui/icon-cloud";

export function BentoGridStack() {
  return (
    <section id="skills" className="my-12 md:my-[112px] max-w-4xl">
      <h2 className="heading mb-6">Ma stack</h2>

      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "React JS / Next JS",
    description: "Spécialisé sur React JS depuis plus de 3 ans !  ",
    header: (
      <>
        <div>
          <img
            className="animate-spin-slow w-[90px]"
            alt="Logo de React JS"
            src={`/images/icons/technos/re.svg`}
          />
        </div>
      </>
    ),
    icon: "🚀",
  },
  {
    title: "Typescript",
    description: "Pour plus de sécurité dans les projets ",
    header: (
      <>
        <img
          className="w-[90px]"
          src={`/images/icons/technos/ts.svg`}
          alt="Logo de Typescript"
        />
      </>
    ),
    icon: "🔒",
  },
  {
    title: "Tailwind CSS",
    description:
      "Du CSS rapide et efficace pour un résultat au pixels perfect ",
    header: (
      <>
        <img
          className="w-[90px]"
          src={`/images/icons/technos/tail.svg`}
          alt="Logo de Tailwind CSS"
        />
      </>
    ),
  },
  {
    title: "Maitrise de l'écosystème React",
    description: "Redux Toolkit, RTK Query, React Hook Form, Jest, ...",
    header: (
      <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg  bg-black px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    ),
    icon: "🔥",
  },
  {
    title: "Backend API / Routes with NextJS",
    description:
      "Spécialiste du frontend, mais je peux aussi monter un back rapidement avec NextJS côté serveur, avec Prisma, PostgressSQL pour la database",
    header: (
      <div className="flex justify-around">
        <img
          className="w-[90px]"
          src={`/images/icons/technos/neon.png`}
          alt="Logo de Neon.tech"
        />
        <img
          className=" w-[90px]"
          src={`/images/icons/technos/prisma.svg`}
          alt="Logo de Prisma"
        />
      </div>
    ),
  },
];
