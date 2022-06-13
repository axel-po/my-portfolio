import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function About({ data }) {
  console.log(data[0]?.description);
  return (
    <section className='my-[120px] lg:flex lg:justify-between'>
      <Title>About</Title>
      <div className='mt-5 lg:max-w-[650px]'>
        <Text>{data[0]?.description ?? <span className='text-red-500'>Erreur lors du chargement des données</span>}</Text>
      </div>
    </section>
  );
}
