import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function index() {
  return (
    <div className='container'>
      <Nav />
      <Header />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
