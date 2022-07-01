import { useEffect, useRef } from "react";
import { slideInTop } from "../../utils/animations";

export default function Header() {
  const titleRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    slideInTop(titleRef.current);
  }, []);

  useEffect(() => {

    slideInTop(descRef.current);
  }, []);


  return (
    <header className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
      <h2 ref={titleRef} className='text-white tracking-wide text-clamp-xl'>
        Portfolio
      </h2>

      <p ref={descRef} className='text-gray text-lg mt-5 max-w-[580px] lg:text-[26px] lg:leading-[40px]'>
        Bienvenue sur mon portfolio, je suis Axel Pointud développeur web frontend spécialisé sur la librairie React JS.
      </p>
    </header>
  );
}
