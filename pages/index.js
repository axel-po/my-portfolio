import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
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
        <meta name='title' content='Axel Pointud - Développeur web' />
        <meta
          name='description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.axel-pointud.fr/' />
        <meta property='og:title' content='Axel Pointud - Développeur web' />
        <meta
          property='og:description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='og:image' content='' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.axel-pointud.fr/' />
        <meta property='twitter:title' content='Axel Pointud - Développeur web' />
        <meta
          property='twitter:description'
          content="Bonjour, je m'appelle Axel Pointud et je suis un développeur web spécialisé en React JS. Bienvenue sur mon portfolio."
        />
        <meta property='twitter:image' content=''></meta>
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
