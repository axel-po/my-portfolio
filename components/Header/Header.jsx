import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function Header() {
  return (
    <header className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
      <Title>Portfolio</Title>

      <p className='text-gray text-lg lg:text-[26px] lg:leading-[40px] mt-5 max-w-[580px]'>
        Bienvenue sur mon portfolio, je suis Axel Pointud développeur web frontend spécialisé sur la librairie React JS.
      </p>
    </header>
  );
}
