import { useEffect, useRef } from "react";
import { Title } from "../Typography/Typography";
import { gsap } from "gsap";

export default function Header() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, { rotation: "+=360" });
  }, []);

  return (
    <header className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
      <Title ref={titleRef}>Portfolio</Title>

      <p className='text-gray text-lg lg:text-[26px] lg:leading-[40px] mt-5 max-w-[580px]'>
        Bienvenue sur mon portfolio, je suis Axel Pointud développeur web frontend spécialisé sur la librairie React JS.
      </p>
    </header>
  );
}
