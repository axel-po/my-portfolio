import { useRef, useEffect } from "react";
import { slideInTop } from "../../utils/animations";

export default function Contact() {
  const titleRef = useRef();
  const contactRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !contactRef.current.includes(el)) {
      contactRef.current.push(el);
    }
  };

  useEffect(() => {
    slideInTop(titleRef.current);
  }, []);

  useEffect(() => {
    slideInTop(slideInTop(contactRef.current));
  }, []);

  return (
    <section className='lg:flex lg:justify-between pb-[120px]'>
      <h2 className='text-white tracking-wide text-clamp-xl' ref={titleRef}>
        Contact
      </h2>
      <div className='grid grid-cols-1 gap-5 w-[50%] mt-5 md:grid-cols-2 ' ref={contactRef}>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='https://github.com/axel-po' target='_blanck'>
          Github
        </a>
        <a
          className='text-white text-xl lg:text-2xl hover:text-gray transition-colors'
          href='https://www.linkedin.com/in/axel-pointud-7a891b1ba/'
          target='_blanck'>
          Linkedin
        </a>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='https://twitter.com/AxelPointud' target='_blanck'>
          Twitter
        </a>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='mailto:contact@axel-pointud.fr' target='_blanck'>
          Email
        </a>
      </div>
    </section>
  );
}
