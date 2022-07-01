import Project from "../Project/Project";
import { useRef, useEffect } from "react";
import { slideInTop } from "../../utils/animations";

export default function Projects({ works }) {
  const titleRef = useRef();
  const projectRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !projectRef.current.includes(el)) {
      projectRef.current.push(el);
    }
  };

  useEffect(() => {
    slideInTop(titleRef.current, false, "0.6", "0.4", projectRef.current);
  }, []);

  useEffect(() => {
    slideInTop(slideInTop(projectRef.current, true));
  }, []);

  return (
    <section>
      <h2 ref={titleRef} className='text-white tracking-wide  text-clamp-xl '>
        Projets
      </h2>
      {works.length == 0 ? (
        <p>Pas de projets.</p>
      ) : (
        <div className='grid md:grid-cols-2 gap-12 mt-[30px] mb-[55px]'>
          {works.map((work, id) => (
            <div key={id} ref={addToRefs}>
              <Project work={work} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
