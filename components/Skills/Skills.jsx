import React from "react";
import { Title } from "../Typography/Typography";
import Image from "next/image";
import HTML from "/public/assets/logos_html.svg";
import CSS from "/public/assets/logos_css.svg";
import SASS from "/public/assets/logos_sass.svg";
import Tailwind from "/public/assets/icon-tailwind.svg";
import JS from "/public/assets/logos_javascript.svg";
import REACT from "/public/assets/logos_react.svg";

export default function Skills() {
  return (
    <section className='pb-[120px]'>
      <Title>Mes Skills</Title>

      <div className='grid grid-cols-3 gap-6 mt-5'>
        <Image src={HTML} width='45' height='45' alt='icon linkedin axel pointud' />
        <Image src={CSS} width='45' height='45' alt='icon linkedin axel pointud' />
        <Image src={SASS} width='45' height='45' alt='icon linkedin axel pointud' />
        <Image src={Tailwind} width='45' height='45' alt='icon linkedin axel pointud' />
        <Image src={JS} width='45' height='45' alt='icon linkedin axel pointud' />
        <Image src={REACT} width='45' height='45' alt='icon linkedin axel pointud' />
      </div>
    </section>
  );
}
