/* eslint-disable @next/next/no-img-element */
import { Title } from "../Typography/Typography";
import Image from "next/image";
import { urlFor } from "../../config";

export default function Skills({ skills }) {
  return (
    <section className='pb-[120px] lg:flex lg:justify-between lg:items-baseline'>
      <Title>Mes Skills</Title>

      <div className='grid grid-cols-3 gap-5 w-[50%] mt-12 lg:mt-0 lg:flex lg:max-w-[500px] lg:flex-wrap'>
        {skills.map((skill, idx) => (
          <div key={idx} className='flex flex-col items-center'>
            <img
              className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'
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
