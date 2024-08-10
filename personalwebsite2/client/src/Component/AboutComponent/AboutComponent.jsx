// AboutComponent.js
import React from "react";
import AboutBlock from "./AboutBlock";
import RoughHighlight from "../RoughHighlight";

const aboutBlock = {
  1: `I'm a student in NCSU's class of 2025, pursuing a major in Computer Science and a minor in Mathematics.
  I have been studying, learning, making small projects since highschool and am comfortable coding in Java, Python, C++, HTML, CSS, Javascript, React, and Typescript.`,
  2: `When I'm not in classes, I'm often doing research or working out. I am passionate about creating software products that can positively
  impact people's lives in various ways.`,
  3: `So far, I've hosted two web applications that I built from the ground up, handling everything from coding and testing to production and deployment on AWS. I love the idea of creating something that others can use repeatedly.`,
  4: `Currently, I'm involved in undergraduate research with Associate
    Professor Dr. Yoon on an ongoing project called PROJECT OVAL.`,
};

function AboutComponent() {
  return (
    <div id="about" className="w-1/2 flex flex-col">
      <div className="text-4xl font-extrabold tracking-widest">
        <RoughHighlight>about</RoughHighlight>
      </div>
      <div className="text-2xl font-extrabold">NCSU '25, Student</div>

      {Object.entries(aboutBlock).map(([key, value]) => (
        <AboutBlock key={key} text={value} />
      ))}
    </div>
  );
}

export default AboutComponent;
