import Project from "../Project/Project";
import { Title } from "../Typography/Typography";

export default function Projects() {
  return (
    <section>
      <Title>Projets</Title>

      <div className='grid md:grid-cols-2 gap-12 mt-[30px] mb-[55px]'>
        <Project />
        <Project />
        <Project />

      </div>
    </section>
  );
}
