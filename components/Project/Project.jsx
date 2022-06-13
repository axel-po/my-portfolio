import Image from "next/image";
import React from "react";
import { Title } from "../Typography/Typography";
import Thumb from "/public/images/3.png";
import Tailwind from "/public/assets/icon-tailwind.svg";

export default function Project() {
  return (
    <article className=''>
      {/* cursor-pointer transition-all hover:opacity-50s */}
      <div className='w-full h-[250px] rounded-lg bg-blue-200'>{/* <Image className='rounded-lg' src={Thumb} alt='projet axel' /> */}</div>
      <div className=' pt-2'>
        <h3 className='text-lg'>Clone de Netflix</h3>
        <div className='flex gap-3'>
          <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
          <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
          <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
        </div>
      </div>
    </article>
  );
}
