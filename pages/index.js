import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { client } from "../config";

export default function index({ about }) {

  return (
    <div className='container'>
      <Nav />
      <Header />
      <Projects />
      <About data={about} />
      <Skills />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const about = await client.fetch(`*[_type == "about"]`);

  return {
    props: {
      about,
    },
  };
}
