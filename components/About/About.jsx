import React from "react";
import { Title, Text } from "../Typography/Typography";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About({ about }) {
  const TL = gsap.timeline();
  const titleRef = useRef();

  useEffect(() => {
    TL.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ScrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        markers: true,
      },
    });
  }, [TL]);

  return (
    <section className='my-[120px] lg:flex lg:justify-between'>
      <h2 ref={titleRef} className='text-white tracking-wide text-clamp-xl translate-y-[20px] opacity-0 invisible'>
        About
      </h2>
      <div className='mt-5 lg:max-w-[650px]'>
        <Text>{about?.description ?? <span className='text-red-500'>Erreur lors du chargement des données</span>}</Text>
      </div>
    </section>
  );
}
