import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import catWalk from './assets/cat-walk.gif'; // ✅ adjust path if needed

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero /> {/* No layout here — keep it clean! */}
      <Layout>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
