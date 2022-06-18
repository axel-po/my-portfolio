import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { client } from "../config";

export default function index({ about, works, skills }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Axel Pointud - Développeur web</title>
      </Head>

      <div className='container '>
        <Header />
        <Projects works={works} />
        <About about={about} />
        <Skills skills={skills} />
        <Contact />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const about = await client.fetch(`*[_type == "about"][0]{description}`);
  const works = await client.fetch(`*[_type == "works"] | order(_createdAt desc)`);
  const skills = await client.fetch(`*[_type == "skills"]{icon, title, _createdAt} | order(_createdAt asc)`);

  return {
    props: {
      about,
      works,
      skills,
    },
  };
}
