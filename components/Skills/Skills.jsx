/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import { urlFor } from "../../config";
import { fadeIn, slideInTop } from "../../utils/animations";

export default function Skills({ skills }) {
  const titleRef = useRef();
  const iconRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !iconRef.current.includes(el)) {
      iconRef.current.push(el);
    }
  };

  useEffect(() => {
    slideInTop(titleRef.current);
  }, []);

  useEffect(() => {
    fadeIn(iconRef.current);
  }, []);

  return (
    <section className='pb-[120px] lg:flex lg:justify-between lg:items-baseline'>
      <div className='lg:6/12'>
        <h2 ref={titleRef} className='text-white tracking-wide text-clamp-xl'>
          Mes Skills
        </h2>
      </div>

      <div className='grid grid-cols-3 gap-5 w-full mt-12 lg:mt-0 lg:flex lg:w-6/12 lg:max-w-[500px] lg:flex-wrap'>
        {skills.map((skill, idx) => (
          <div key={idx} className='flex flex-col items-center' ref={addToRefs}>
            <img
              className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]'
              src={urlFor(skill?.icon?.asset?._ref).url()}
              alt='icon langage de programmation'
            />
            <p className='text-sm text-center my-2'>{skill?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
