import React from "react";
import AboutBlock from "./AboutBlock";
import RoughHighlight from "../RoughHighlight";

// Define the content with a mix of text and components
const aboutBlock = [
  {
    id: 1,
    content: (
      <>
        I'm a student in NCSU's class of 2025, pursuing a major in <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={2}>Computer Science</RoughHighlight> and a minor in <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={2}>Mathematics.</RoughHighlight>
        I have been studying, learning, making small projects since high school and am comfortable coding in Java, Python, C++, HTML, CSS, Javascript, React, and Typescript.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        When I'm not in classes, I'm often doing <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={2}>research or working out.</RoughHighlight> I am passionate about creating software products that can positively
        impact people's lives in various ways.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        So far, <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={2}>I've hosted two web applications</RoughHighlight> that I built from the ground up, handling everything from coding and testing to production and deployment on AWS. I love the idea of creating something that others can use repeatedly.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        Currently, I'm involved in undergraduate research with Associate
        Professor Dr. Yoon on an ongoing project called <RoughHighlight typeBox="box" color="#2E2E2E" strokeWidth={2}>PROJECT OVAL</RoughHighlight>.
      </>
    ),
  },
];

function AboutComponent() {
  return (
    <div id="about" className="w-1/2 flex flex-col">
      <div className="text-4xl font-extrabold tracking-widest">
        <RoughHighlight>about</RoughHighlight>
      </div>
      <div className="text-2xl font-extrabold">ncsu '25, student</div>

      {aboutBlock.map((block) => (
        <AboutBlock key={block.id} text={block.content} />
      ))}
    </div>
  );
}

export default AboutComponent;
