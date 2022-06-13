import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function Header() {
  return (
    <header className='py-[120px]'>
      <Title>Portfolio</Title>
      <div className='mt-5'>
        <Text>Bienvenue sur mon portfolio, je suis Axel Pointud développeur web frontend spécialisé sur la librairie React JS.</Text>
      </div>
    </header>
  );
}
