import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function About() {
  return (
    <section className='my-[120px] lg:flex lg:justify-between'>
      <Title>A propos de moi</Title>
      <div className='mt-5 lg:max-w-[500px]'>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id quas architecto repellendus totam suscipit, ab ipsa officia distinctio
          perferendis! Laboriosam provident enim saepe cupiditate fugit esse velit in quam?
        </Text>
      </div>
    </section>
  );
}
