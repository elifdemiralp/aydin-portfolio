import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Contact from '../components/Contact';


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Aydin Aydemir</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}


      <section id="hero" className="snap-center">
        <Hero/>
   

      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <Experience/>
      </section>
      

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className=' snap-start'>
        <Project/>

      </section>

      {/* contact me */}
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>
    </div>
  );
};

export default Home;
