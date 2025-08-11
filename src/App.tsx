import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodeSnippets from './components/CodeSnippets';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodeSnippets />
      <Contact />
    </div>
  );
}

export default App;