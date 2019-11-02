import React from "react";
import Education from './resume/Education';
import Experience from './resume/Experience';
import Projects from './resume/Projects';
import Skills from './resume/Skills'

const Sections = () => {
  return (
    <div>
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Sections;
