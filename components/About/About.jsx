import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function About({ about }) {
  return (
    <section className='my-[120px] lg:flex lg:justify-between'>
      <Title>About</Title>
      <div className='mt-5 lg:max-w-[650px]'>
        <Text>{about?.description ?? <span className='text-red-500'>Erreur lors du chargement des données</span>}</Text>
      </div>
    </section>
  );
}
