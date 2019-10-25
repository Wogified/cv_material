import React from "react";
import Education from './resume/Education';

const renderSections = jobDesc => {
  return jobDesc.map(item => {
    return (
      <div>
        <li>{item}</li>
      </div>
    );
  });
};

const Sections = () => {
  return (
    <div>
      <Education />
      {/* <Experience />
      <Projects />
      <Skills /> */}
    </div>
  );
};

export default Sections;
