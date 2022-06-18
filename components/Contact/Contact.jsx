import { Title } from "../Typography/Typography";

export default function Contact() {
  return (
    <section className='pb-[220px] lg:flex lg:justify-between '>
      <Title>Contact</Title>
      
      <div className='grid grid-cols-1 gap-5 w-[50%] mt-5 md:grid-cols-2 '>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='https://github.com/axel-po' target='_blanck'>
          Github
        </a>
        <a
          className='text-white text-xl lg:text-2xl hover:text-gray transition-colors'
          href='https://www.linkedin.com/in/axel-pointud-7a891b1ba/'
          target='_blanck'>
          Linkedin
        </a>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='https://twitter.com/AxelPointud' target='_blanck'>
          Twitter
        </a>
        <a className='text-white text-xl lg:text-2xl hover:text-gray transition-colors' href='mailto:contact@axel-pointud.fr' target='_blanck'>
          Email
        </a>
      </div>
    </section>
  );
}
