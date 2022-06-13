import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function Contact() {
  return (
    <section className="lg:flex lg:justify-between pb-[120px]">
      <Title>Contact</Title>
      <div className='grid grid-cols-2 min-w-[400px] mt-5'>
        <Text> Github</Text>
        <Text> Linkedin</Text>
        <Text>Twitter</Text>
        <Text>Email</Text>
      </div>
    </section>
  );
}
