import React from "react";
import AboutBlock from "./AboutBlock";

const aboutBlock = {
  1: `I'm an undergraduate student in NCSU's class of 2025, with plans to
    pursue graduate studies.`,
  2: `I am passionate about creating software products that can positively
    impact people's lives in various ways.`,
  3: `Currently, I'm involved in undergraduate research with Associate
    Professor Dr. Yoon on an ongoing project called PROJECT OVAL.`,
};

function AboutComponent() {
  return (
    <>
      <div id="about" className="w-1/2 flex flex-col">
        <div className="text-4xl font-extrabold tracking-widest">about</div>
        <div className="font-bold mt-3">NCSU '25, Student</div>

        {Object.entries(aboutBlock).map(([key, value]) => {
          return <AboutBlock key={key} text={value} />;
        })}
      </div>
    </>
  );
}

export default AboutComponent;
