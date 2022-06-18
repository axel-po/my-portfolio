import Project from "../Project/Project";
import { Title } from "../Typography/Typography";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ works }) {
  const titleRef = useRef();
  const projectRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !projectRef.current.includes(el)) {
      projectRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.to(projectRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
      },
    });

    gsap.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
      },
    });
  }, []);

  return (
    <section>
      <h2 ref={titleRef} className='text-white tracking-wide text-clamp-xl invisible opacity-0 translate-y-[50px]'>
        Projets
      </h2>
      {works.length == 0 ? (
        <p>Pas de projets.</p>
      ) : (
        <div className='grid md:grid-cols-2 gap-12 mt-[30px] mb-[55px]'>
          {works.map((work, id) => (
            <div key={id} ref={addToRefs} className='invisible opacity-0 translate-y-[20px]'>
              <Project work={work} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
