import Project from "../Project/Project";
import { Title } from "../Typography/Typography";

export default function Projects({ works }) {
  console.log(works);
  return (
    <section>
      <Title>Projets</Title>
      {works.length == 0 ? (
        <p>Pas de projets.</p>
      ) : (
        <div className='grid md:grid-cols-2 gap-12 mt-[30px] mb-[55px]'>
          {works.map((work, id) => (
            <Project key={id} work={work} />
          ))}
        </div>
      )}
    </section>
  );
}
