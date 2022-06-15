import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { client } from "../config";

export default function index({ about, works }) {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <Projects works={works} />
      <About data={about} />
      <Skills />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const about = await client.fetch(`*[_type == "about"]`);
  const works = await client.fetch(`*[_type == "works"]`);

  return {
    props: {
      about,
      works,
    },
  };
}
