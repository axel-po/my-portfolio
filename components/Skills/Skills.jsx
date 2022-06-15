import React from "react";
import { Title } from "../Typography/Typography";
import HTML from "/public/assets/logos_html.svg";
import CSS from "/public/assets/logos_css.svg";
import SASS from "/public/assets/logos_sass.svg";
import Tailwind from "/public/assets/icon-tailwind.svg";
import JS from "/public/assets/logos_javascript.svg";
import REACT from "/public/assets/logos_react.svg";
import Skill from "../Skill/Skill";

export default function Skills() {
  return (
    <section className='pb-[120px] lg:flex lg:justify-between'>
      <Title>Mes Skills</Title>

      <div className='grid grid-cols-3 gap-5 mt-12 lg:mt-0'>
        <Skill src={HTML} size='55' />
        <Skill src={CSS} size='55' />
        <Skill src={SASS} size='55' />
        <Skill src={Tailwind} size='55' />
        <Skill src={JS} size='55' />
        <Skill src={REACT} size='55' />
      </div>
    </section>
  );
}
