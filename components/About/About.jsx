import { Text } from "../Typography/Typography";
import { useRef, useEffect } from "react";
import { slideInTop } from "../../utils/animations";

export default function About({ about }) {
  const titleRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    slideInTop(titleRef.current);
  }, []);

  useEffect(() => {
    slideInTop(descRef.current);
  }, []);

  return (
    <section className='my-[120px] lg:flex lg:justify-between'>
      <div className='lg:w-6/12'>
        <h2 ref={titleRef} className='text-white tracking-wide text-clamp-xl'>
          About
        </h2>
      </div>

      <div className='mt-5 lg:max-w-[650px]' ref={descRef}>
        <Text>{about?.description ?? <span className='text-red-500'>Erreur lors du chargement des données</span>}</Text>
      </div>
    </section>
  );
}
